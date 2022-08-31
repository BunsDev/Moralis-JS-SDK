import { SWRConfiguration } from 'swr/dist/types';
import { TUploadFolderParams, TUploadFolderReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmApiUploadFolder = (params: TUploadFolderParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.get(`/api${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUploadFolderReturn['result']>(
    [`/moralis/EvmApi/account/getNativeBalance`, params],
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
