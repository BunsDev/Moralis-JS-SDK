import {
  GetWalletTransactionsJSONRequest,
  getWalletTransactionsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { PaginatedOperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

type RequestParams = Pick<GetWalletTransactionsJSONRequest, | 'address'>

type RequestQuery = Pick<GetWalletTransactionsJSONRequest, | 'chain'| 'fromBlock'| 'toBlock'| 'fromDate'| 'toDate'| 'cursor'| 'limit'>

export const evmGetWalletTransactionsResolver  = async (
  req: Request<RequestParams, undefined, undefined, RequestQuery>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await new PaginatedOperationResolver(getWalletTransactionsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletTransactionsOperation.deserializeRequest({ ...req.params,  ...req.query, }, Moralis.Core),
    );

    return res.send(data?.raw);
  } catch (error) {
    return next(error);
  }
};