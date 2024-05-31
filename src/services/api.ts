import axios from 'axios';
import { API_KEY as apiKeySet, BASE_URL } from '../config';
import { TimeSeriesIntraDayResponse, ErrorResponse } from '../types/api';
import { getValidApiKey } from '../utils';

export const getIntraDayStockData = async (
  symbol: string,
  interval: string = '1min'
): Promise<TimeSeriesIntraDayResponse | ErrorResponse> => {
  const apiKey = getValidApiKey(apiKeySet);
  try {
    const response = await axios.get<TimeSeriesIntraDayResponse | ErrorResponse>(`${BASE_URL}`, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: interval,
        apikey: apiKey,
      },
    });

    if ('Information' in response.data) {
      return { Information: response.data.Information as string };
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch intra-day stock data: ${(error as Error).message}`);
  }
};
