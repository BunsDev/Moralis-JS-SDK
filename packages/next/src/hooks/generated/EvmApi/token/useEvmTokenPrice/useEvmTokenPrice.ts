import { SWRConfiguration } from 'swr/dist/types';
import { TUseevmtokenpriceParams, TUseevmtokenpriceReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmTokenPrice = (params: TUseevmtokenpriceParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api/moralis/${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseevmtokenpriceReturn>(
    [`EvmApi/token/getTokenPrice`, params],
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