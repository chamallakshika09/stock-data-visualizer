export type MetaData = {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
};

export type TimeSeriesEntry = {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
};

export type TimeSeries = {
  [key: string]: TimeSeriesEntry;
};

export type TimeSeriesIntraDayResponse = {
  'Meta Data': MetaData;
  [key: string]: TimeSeries | MetaData;
};

export interface ErrorResponse {
  Information: string;
}
