import { TimeSeries, TimeSeriesIntraDayResponse } from '../types/api';
import MetaDataDisplay from './MetaDataDisplay';
import StockDataTable from './StockDataTable';

const GridView = ({ data, interval }: { data: TimeSeriesIntraDayResponse; interval: string }) => {
  const timeSeriesKey = `Time Series (${interval})`;
  return (
    <div>
      <MetaDataDisplay metaData={data['Meta Data']} />
      <StockDataTable timeSeries={data[timeSeriesKey] as TimeSeries} />
    </div>
  );
};

export default GridView;
