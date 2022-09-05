import { SWRConfiguration } from 'swr/dist/types';
import { TUseEvmTokenMetadataBySymbolParams, TUseEvmTokenMetadataBySymbolReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmTokenMetadataBySymbol = (params: TUseEvmTokenMetadataBySymbolParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseEvmTokenMetadataBySymbolReturn>(
    [`/moralis/EvmApi/token/getTokenMetadataBySymbol`, params],
    axiosFetcher,
    SWRConfig,
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};
