import { SWRConfiguration } from 'swr/dist/types';
import { TGetTokenIdMetadataParams, TGetTokenIdMetadataReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmApiGetTokenIdMetadata = (params: TGetTokenIdMetadataParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TGetTokenIdMetadataReturn['result']>(
    [`/moralis/EvmApi/token/getTokenIdMetadata`, params],
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
