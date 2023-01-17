import {
  GetTokenAllowanceJSONRequest,
  getTokenAllowanceOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetTokenAllowanceJSONRequest, | 'address'>

type RequestQuery = Pick<GetTokenAllowanceJSONRequest, | 'chain'| 'ownerAddress'| 'spenderAddress'>

export const evmGetTokenAllowanceResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new OperationResolver(getTokenAllowanceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenAllowanceOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};