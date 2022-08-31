import { SWRConfiguration } from 'swr/dist/types';
import { TGetNFTTransfersByBlockParams, TGetNFTTransfersByBlockReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmApiGetNFTTransfersByBlock = (params: TGetNFTTransfersByBlockParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TGetNFTTransfersByBlockReturn['result']>(
    [`/moralis/EvmApi/native/getNFTTransfersByBlock`, params],
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
