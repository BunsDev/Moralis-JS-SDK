import {
  GetTokenMetadataBySymbolJSONRequest,
  getTokenMetadataBySymbolOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';



type RequestQuery = Pick<GetTokenMetadataBySymbolJSONRequest, | 'chain'| 'symbols'>

export const evmGetTokenMetadataBySymbolResolver  = async (
  req: Request<undefined, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new OperationResolver(getTokenMetadataBySymbolOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenMetadataBySymbolOperation.deserializeRequest({   ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};