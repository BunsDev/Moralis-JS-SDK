import { SWRConfiguration } from 'swr/dist/types';
import { TGetTokenTransfersParams, TGetTokenTransfersReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmApiGetTokenTransfers = (params: TGetTokenTransfersParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TGetTokenTransfersReturn['result']>(
    [`/moralis/EvmApi/account/getTokenTransfers`, params],
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
