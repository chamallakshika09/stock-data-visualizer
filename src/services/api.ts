import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';
import { TimeSeriesIntraDayResponse, ErrorResponse } from '../types/api';

export const getIntraDayStockData = async (
  symbol: string,
  interval: string = '1min'
): Promise<TimeSeriesIntraDayResponse | ErrorResponse> => {
  const response = await axios.get<TimeSeriesIntraDayResponse | ErrorResponse>(`${BASE_URL}`, {
    params: {
      function: 'TIME_SERIES_INTRADAY',
      symbol: symbol,
      interval: interval,
      apikey: API_KEY,
    },
  });
  if ('Information' in response.data) {
    return { Information: response.data.Information as string };
  }
  return response.data;
};
