import { SWRConfiguration } from 'swr/dist/types';
import { TGetNFTMetadataParams, TGetNFTMetadataReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmNFTMetadata = (params: TGetNFTMetadataParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TGetNFTMetadataReturn['result']>(
    [`/moralis/EvmApi/token/getNFTMetadata`, params],
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
