import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import 'chartjs-chart-financial/dist/chartjs-chart-financial.esm.js';
import 'chartjs-adapter-date-fns';
import { TimeSeries, TimeSeriesIntraDayResponse } from '../types/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement,
  TimeScale
);

type CandlestickDataPoint = {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
};

const CandlestickChart = ({ data, interval }: { data: TimeSeriesIntraDayResponse; interval: string }) => {
  const timeSeriesKey = `Time Series (${interval})`;
  const timeSeries = data[timeSeriesKey] as TimeSeries;
  const chartData = Object.keys(timeSeries)
    .map((time) => ({
      x: new Date(time).getTime(),
      o: parseFloat(timeSeries[time]['1. open']),
      h: parseFloat(timeSeries[time]['2. high']),
      l: parseFloat(timeSeries[time]['3. low']),
      c: parseFloat(timeSeries[time]['4. close']),
    }))
    .reverse();

  const chartOptions: ChartOptions<'candlestick'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Stock Data for ${data['Meta Data']['2. Symbol']}`,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const raw = context.raw as CandlestickDataPoint;
            const { o, h, l, c } = raw;
            return `Open: ${o}, High: ${h}, Low: ${l}, Close: ${c}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          tooltipFormat: 'PPpp',
          displayFormats: {
            minute: 'HH:mm',
          },
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  const chartDataset: ChartData<'candlestick'> = {
    datasets: [
      {
        label: 'Candlestick',
        data: chartData,
      },
    ],
  };

  return <Chart type="candlestick" data={chartDataset} options={chartOptions} />;
};

export default CandlestickChart;
