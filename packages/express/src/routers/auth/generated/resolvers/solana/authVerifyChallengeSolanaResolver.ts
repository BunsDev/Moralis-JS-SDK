import {
  VerifyChallengeSolanaJSONRequest,
  verifyChallengeSolanaOperation,
} from 'moralis/common-auth-utils';
import { AuthConfig } from '../../AuthRouter';
import { generateAccessToken, resCookieJWT } from '../../../jwt';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestBody = Pick<VerifyChallengeSolanaJSONRequest, | 'message'| 'signature'>

export const authVerifyChallengeSolanaResolver  = async (
  req: Request<undefined, undefined, RequestBody, undefined>,
  res: Response,
  next: NextFunction,
  authConfig: AuthConfig,
) => {
  try {
    const { raw } = await new OperationResolver(verifyChallengeSolanaOperation, Moralis.Auth.baseUrl, Moralis.Core).fetch(
      verifyChallengeSolanaOperation.deserializeRequest({  ...req.body, ...authConfig }, Moralis.Core),
    );

  if (authConfig?.secret) {
    const token = generateAccessToken({signature: req.body.signature, address: raw.address}, authConfig.secret)
    return resCookieJWT(token, res, raw, authConfig?.cookie)
  }

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};