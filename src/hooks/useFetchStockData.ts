import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getIntraDayStockData } from '../services/api';
import { TimeSeriesIntraDayResponse } from '../types/api';

const useFetchStockData = (symbol: string, interval: string = '1min') => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchData = async (): Promise<TimeSeriesIntraDayResponse> => {
    const cacheKey = `${symbol}-${interval}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const response = await getIntraDayStockData(symbol, interval);
    if ('Information' in response) {
      throw new Error(response.Information as string);
    } else {
      localStorage.setItem(cacheKey, JSON.stringify(response));
      return response;
    }
  };

  const { data, error, isFetching, refetch } = useQuery<TimeSeriesIntraDayResponse, Error>(
    ['stockData', symbol, interval],
    fetchData,
    {
      refetchInterval: shouldFetch ? false : 60000,
      retry: 3,
      staleTime: 60000,
    }
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setShouldFetch(false);
      } else {
        setShouldFetch(true);
        refetch();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refetch]);

  return { data: data || null, loading: isFetching, error: error?.message || null };
};

export default useFetchStockData;
