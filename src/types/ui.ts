export type TableData = {
  date: string;
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
};

export enum ViewOptions {
  CHART_VIEW = 'Chart View',
  GRID_VIEW = 'Grid View',
}

export enum IntervalOptions {
  ONE_MIN = '1min',
  FIVE_MIN = '5min',
  FIFTEEN_MIN = '15min',
  THIRTY_MIN = '30min',
  SIXTY_MIN = '60min',
}
