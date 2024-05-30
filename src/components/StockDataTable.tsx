import { TimeSeriesEntry, TimeSeries } from '../types/api';
import { TableData } from '../types/ui';
import Table from './Table';

const StockDataTable = ({ timeSeries }: { timeSeries: TimeSeries }) => {
  const dates = Object.keys(timeSeries).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  const data: TableData[] = dates.map((date) => ({
    date,
    ...timeSeries[date],
  }));

  const columns = [
    {
      header: 'Date',
      accessor: (row: { date: string }) => row.date,
    },
    {
      header: 'Open',
      accessor: (row: TimeSeriesEntry) => row['1. open'],
    },
    {
      header: 'High',
      accessor: (row: TimeSeriesEntry) => row['2. high'],
    },
    {
      header: 'Low',
      accessor: (row: TimeSeriesEntry) => row['3. low'],
    },
    {
      header: 'Close',
      accessor: (row: TimeSeriesEntry) => row['4. close'],
    },
    {
      header: 'Volume',
      accessor: (row: TimeSeriesEntry) => row['5. volume'],
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default StockDataTable;
