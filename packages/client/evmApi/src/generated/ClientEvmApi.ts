
// CAUTION: This file is automatically generated. Do not edit it manually!

import { endpointWeightsOperation, EndpointWeightsRequest, EndpointWeightsResponse, EndpointWeightsJSONResponse, runContractFunctionOperation, RunContractFunctionRequest, RunContractFunctionResponse, RunContractFunctionJSONResponse, web3ApiVersionOperation, Web3ApiVersionRequest, Web3ApiVersionResponse, Web3ApiVersionJSONResponse, getBlockOperation, GetBlockRequest, GetBlockResponse, GetBlockJSONResponse, getDateToBlockOperation, GetDateToBlockRequest, GetDateToBlockResponse, GetDateToBlockJSONResponse, getContractEventsOperation, GetContractEventsRequest, GetContractEventsResponse, GetContractEventsJSONResponse, getContractLogsOperation, GetContractLogsRequest, GetContractLogsResponse, GetContractLogsJSONResponse, getContractNFTsOperation, GetContractNFTsRequest, GetContractNFTsResponse, GetContractNFTsJSONResponse, getNFTContractMetadataOperation, GetNFTContractMetadataRequest, GetNFTContractMetadataResponse, GetNFTContractMetadataJSONResponse, getNFTContractTransfersOperation, GetNFTContractTransfersRequest, GetNFTContractTransfersResponse, GetNFTContractTransfersJSONResponse, getNFTLowestPriceOperation, GetNFTLowestPriceRequest, GetNFTLowestPriceResponse, GetNFTLowestPriceJSONResponse, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponse, GetNFTMetadataJSONResponse, getNFTOwnersOperation, GetNFTOwnersRequest, GetNFTOwnersResponse, GetNFTOwnersJSONResponse, getNFTTokenIdOwnersOperation, GetNFTTokenIdOwnersRequest, GetNFTTokenIdOwnersResponse, GetNFTTokenIdOwnersJSONResponse, getNFTTradesOperation, GetNFTTradesRequest, GetNFTTradesResponse, GetNFTTradesJSONResponse, getNFTTransfersByBlockOperation, GetNFTTransfersByBlockRequest, GetNFTTransfersByBlockResponse, GetNFTTransfersByBlockJSONResponse, getNFTTransfersFromToBlockOperation, GetNFTTransfersFromToBlockRequest, GetNFTTransfersFromToBlockResponse, GetNFTTransfersFromToBlockJSONResponse, getNFTTransfersOperation, GetNFTTransfersRequest, GetNFTTransfersResponse, GetNFTTransfersJSONResponse, getWalletNFTCollectionsOperation, GetWalletNFTCollectionsRequest, GetWalletNFTCollectionsResponse, GetWalletNFTCollectionsJSONResponse, getWalletNFTsOperation, GetWalletNFTsRequest, GetWalletNFTsResponse, GetWalletNFTsJSONResponse, getWalletNFTTransfersOperation, GetWalletNFTTransfersRequest, GetWalletNFTTransfersResponse, GetWalletNFTTransfersJSONResponse, reSyncMetadataOperation, ReSyncMetadataRequest, ReSyncMetadataResponse, ReSyncMetadataJSONResponse, searchNFTsOperation, SearchNFTsRequest, SearchNFTsResponse, SearchNFTsJSONResponse, syncNFTContractOperation, SyncNFTContractRequest, SyncNFTContractResponse, SyncNFTContractJSONResponse, getNativeBalanceOperation, GetNativeBalanceRequest, GetNativeBalanceResponse, GetNativeBalanceJSONResponse, getPairAddressOperation, GetPairAddressRequest, GetPairAddressResponse, GetPairAddressJSONResponse, getPairReservesOperation, GetPairReservesRequest, GetPairReservesResponse, GetPairReservesJSONResponse, getTokenAllowanceOperation, GetTokenAllowanceRequest, GetTokenAllowanceResponse, GetTokenAllowanceJSONResponse, getTokenMetadataBySymbolOperation, GetTokenMetadataBySymbolRequest, GetTokenMetadataBySymbolResponse, GetTokenMetadataBySymbolJSONResponse, getTokenMetadataOperation, GetTokenMetadataRequest, GetTokenMetadataResponse, GetTokenMetadataJSONResponse, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponse, GetTokenPriceJSONResponse, getTokenTransfersOperation, GetTokenTransfersRequest, GetTokenTransfersResponse, GetTokenTransfersJSONResponse, getWalletTokenBalancesOperation, GetWalletTokenBalancesRequest, GetWalletTokenBalancesResponse, GetWalletTokenBalancesJSONResponse, getWalletTokenTransfersOperation, GetWalletTokenTransfersRequest, GetWalletTokenTransfersResponse, GetWalletTokenTransfersJSONResponse, getTransactionOperation, GetTransactionRequest, GetTransactionResponse, GetTransactionJSONResponse, getWalletTransactionsOperation, GetWalletTransactionsRequest, GetWalletTransactionsResponse, GetWalletTransactionsJSONResponse, resolveAddressOperation, ResolveAddressRequest, ResolveAddressResponse, ResolveAddressJSONResponse, resolveDomainOperation, ResolveDomainRequest, ResolveDomainResponse, ResolveDomainJSONResponse, uploadFolderOperation, UploadFolderRequest, UploadFolderResponse, UploadFolderJSONResponse } from '@moralisweb3/common-evm-utils';
import { ClientRequestHandler } from '@moralisweb3/client-api-utils';
import { ResponseAdapter, PaginatedResponseAdapter } from '@moralisweb3/common-core';

export class ClientEvmApi {
  public constructor(
    private readonly requestHandler: ClientRequestHandler) {
  }
  
  public readonly utils = {
   endpointWeights: (request: EndpointWeightsRequest): Promise<ResponseAdapter<EndpointWeightsResponse, EndpointWeightsJSONResponse>> => {
      return this.requestHandler.handle(request, endpointWeightsOperation);
    },
   runContractFunction: (request: RunContractFunctionRequest): Promise<ResponseAdapter<RunContractFunctionResponse, RunContractFunctionJSONResponse>> => {
      return this.requestHandler.handle(request, runContractFunctionOperation);
    },
   web3ApiVersion: (request: Web3ApiVersionRequest): Promise<ResponseAdapter<Web3ApiVersionResponse, Web3ApiVersionJSONResponse>> => {
      return this.requestHandler.handle(request, web3ApiVersionOperation);
    },

  };

  public readonly block = {
   getBlock: (request: GetBlockRequest): Promise<ResponseAdapter<GetBlockResponse, GetBlockJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, getBlockOperation);
    },
   getDateToBlock: (request: GetDateToBlockRequest): Promise<ResponseAdapter<GetDateToBlockResponse, GetDateToBlockJSONResponse>> => {
      return this.requestHandler.handle(request, getDateToBlockOperation);
    },

  };

  public readonly events = {
   getContractEvents: (request: GetContractEventsRequest): Promise<PaginatedResponseAdapter<GetContractEventsResponse, GetContractEventsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getContractEventsOperation);
    },
   getContractLogs: (request: GetContractLogsRequest): Promise<PaginatedResponseAdapter<GetContractLogsResponse, GetContractLogsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getContractLogsOperation);
    },

  };

  public readonly nft = {
   getContractNFTs: (request: GetContractNFTsRequest): Promise<PaginatedResponseAdapter<GetContractNFTsResponse, GetContractNFTsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getContractNFTsOperation);
    },
   getNFTContractMetadata: (request: GetNFTContractMetadataRequest): Promise<ResponseAdapter<GetNFTContractMetadataResponse, GetNFTContractMetadataJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, getNFTContractMetadataOperation);
    },
   getNFTContractTransfers: (request: GetNFTContractTransfersRequest): Promise<PaginatedResponseAdapter<GetNFTContractTransfersResponse, GetNFTContractTransfersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTContractTransfersOperation);
    },
   getNFTLowestPrice: (request: GetNFTLowestPriceRequest): Promise<ResponseAdapter<GetNFTLowestPriceResponse, GetNFTLowestPriceJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, getNFTLowestPriceOperation);
    },
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<ResponseAdapter<GetNFTMetadataResponse, GetNFTMetadataJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, getNFTMetadataOperation);
    },
   getNFTOwners: (request: GetNFTOwnersRequest): Promise<PaginatedResponseAdapter<GetNFTOwnersResponse, GetNFTOwnersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTOwnersOperation);
    },
   getNFTTokenIdOwners: (request: GetNFTTokenIdOwnersRequest): Promise<PaginatedResponseAdapter<GetNFTTokenIdOwnersResponse, GetNFTTokenIdOwnersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTTokenIdOwnersOperation);
    },
   getNFTTrades: (request: GetNFTTradesRequest): Promise<PaginatedResponseAdapter<GetNFTTradesResponse, GetNFTTradesJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTTradesOperation);
    },
   getNFTTransfersByBlock: (request: GetNFTTransfersByBlockRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersByBlockResponse, GetNFTTransfersByBlockJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersByBlockOperation);
    },
   getNFTTransfersFromToBlock: (request: GetNFTTransfersFromToBlockRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersFromToBlockResponse, GetNFTTransfersFromToBlockJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersFromToBlockOperation);
    },
   getNFTTransfers: (request: GetNFTTransfersRequest): Promise<PaginatedResponseAdapter<GetNFTTransfersResponse, GetNFTTransfersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersOperation);
    },
   getWalletNFTCollections: (request: GetWalletNFTCollectionsRequest): Promise<PaginatedResponseAdapter<GetWalletNFTCollectionsResponse, GetWalletNFTCollectionsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTCollectionsOperation);
    },
   getWalletNFTs: (request: GetWalletNFTsRequest): Promise<PaginatedResponseAdapter<GetWalletNFTsResponse, GetWalletNFTsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTsOperation);
    },
   getWalletNFTTransfers: (request: GetWalletNFTTransfersRequest): Promise<PaginatedResponseAdapter<GetWalletNFTTransfersResponse, GetWalletNFTTransfersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTTransfersOperation);
    },
   reSyncMetadata: (request: ReSyncMetadataRequest): Promise<ResponseAdapter<ReSyncMetadataResponse, ReSyncMetadataJSONResponse>> => {
      return this.requestHandler.handle(request, reSyncMetadataOperation);
    },
   searchNFTs: (request: SearchNFTsRequest): Promise<PaginatedResponseAdapter<SearchNFTsResponse, SearchNFTsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, searchNFTsOperation);
    },
   syncNFTContract: (request: SyncNFTContractRequest): Promise<ResponseAdapter<SyncNFTContractResponse, SyncNFTContractJSONResponse>> => {
      return this.requestHandler.handle(request, syncNFTContractOperation);
    },

  };

  public readonly balance = {
   getNativeBalance: (request: GetNativeBalanceRequest): Promise<ResponseAdapter<GetNativeBalanceResponse, GetNativeBalanceJSONResponse>> => {
      return this.requestHandler.handle(request, getNativeBalanceOperation);
    },

  };

  public readonly defi = {
   getPairAddress: (request: GetPairAddressRequest): Promise<ResponseAdapter<GetPairAddressResponse, GetPairAddressJSONResponse>> => {
      return this.requestHandler.handle(request, getPairAddressOperation);
    },
   getPairReserves: (request: GetPairReservesRequest): Promise<ResponseAdapter<GetPairReservesResponse, GetPairReservesJSONResponse>> => {
      return this.requestHandler.handle(request, getPairReservesOperation);
    },

  };

  public readonly token = {
   getTokenAllowance: (request: GetTokenAllowanceRequest): Promise<ResponseAdapter<GetTokenAllowanceResponse, GetTokenAllowanceJSONResponse>> => {
      return this.requestHandler.handle(request, getTokenAllowanceOperation);
    },
   getTokenMetadataBySymbol: (request: GetTokenMetadataBySymbolRequest): Promise<ResponseAdapter<GetTokenMetadataBySymbolResponse, GetTokenMetadataBySymbolJSONResponse>> => {
      return this.requestHandler.handle(request, getTokenMetadataBySymbolOperation);
    },
   getTokenMetadata: (request: GetTokenMetadataRequest): Promise<ResponseAdapter<GetTokenMetadataResponse, GetTokenMetadataJSONResponse>> => {
      return this.requestHandler.handle(request, getTokenMetadataOperation);
    },
   getTokenPrice: (request: GetTokenPriceRequest): Promise<ResponseAdapter<GetTokenPriceResponse, GetTokenPriceJSONResponse>> => {
      return this.requestHandler.handle(request, getTokenPriceOperation);
    },
   getTokenTransfers: (request: GetTokenTransfersRequest): Promise<PaginatedResponseAdapter<GetTokenTransfersResponse, GetTokenTransfersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getTokenTransfersOperation);
    },
   getWalletTokenBalances: (request: GetWalletTokenBalancesRequest): Promise<ResponseAdapter<GetWalletTokenBalancesResponse, GetWalletTokenBalancesJSONResponse>> => {
      return this.requestHandler.handle(request, getWalletTokenBalancesOperation);
    },
   getWalletTokenTransfers: (request: GetWalletTokenTransfersRequest): Promise<PaginatedResponseAdapter<GetWalletTokenTransfersResponse, GetWalletTokenTransfersJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getWalletTokenTransfersOperation);
    },

  };

  public readonly transaction = {
   getTransaction: (request: GetTransactionRequest): Promise<ResponseAdapter<GetTransactionResponse, GetTransactionJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, getTransactionOperation);
    },
   getWalletTransactions: (request: GetWalletTransactionsRequest): Promise<PaginatedResponseAdapter<GetWalletTransactionsResponse, GetWalletTransactionsJSONResponse['result']>> => {
      return this.requestHandler.handlePaginated(request, getWalletTransactionsOperation);
    },

  };

  public readonly resolve = {
   resolveAddress: (request: ResolveAddressRequest): Promise<ResponseAdapter<ResolveAddressResponse, ResolveAddressJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, resolveAddressOperation);
    },
   resolveDomain: (request: ResolveDomainRequest): Promise<ResponseAdapter<ResolveDomainResponse, ResolveDomainJSONResponse> | null> => {
      return this.requestHandler.handleNullable(request, resolveDomainOperation);
    },

  };

  public readonly ipfs = {
   uploadFolder: (request: UploadFolderRequest): Promise<ResponseAdapter<UploadFolderResponse, UploadFolderJSONResponse>> => {
      return this.requestHandler.handle(request, uploadFolderOperation);
    },

  };

}