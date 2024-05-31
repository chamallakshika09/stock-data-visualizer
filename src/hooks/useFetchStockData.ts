import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getIntraDayStockData } from '../services/api';
import { TimeSeriesIntraDayResponse } from '../types/api';

const CACHE_EXPIRY_TIME = 5 * 60000;

const useFetchStockData = (symbol: string, interval: string = '1min') => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchData = async (): Promise<TimeSeriesIntraDayResponse> => {
    const cacheKey = `${symbol}-${interval}`;
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY_TIME) {
        return data;
      }
    }

    try {
      const response = await getIntraDayStockData(symbol, interval);
      if ('Information' in response) {
        throw new Error(response.Information as string);
      } else {
        localStorage.setItem(cacheKey, JSON.stringify({ data: response, timestamp: Date.now() }));
        return response;
      }
    } catch (error) {
      throw new Error(`Failed to fetch stock data: ${(error as Error).message}`);
    }
  };

  const { data, error, isFetching, refetch } = useQuery<TimeSeriesIntraDayResponse, Error>(
    ['stockData', symbol, interval],
    fetchData,
    {
      refetchInterval: shouldFetch ? 60000 : false,
      retry: 3,
      staleTime: 60000,
      cacheTime: CACHE_EXPIRY_TIME,
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
