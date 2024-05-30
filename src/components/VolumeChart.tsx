import React from 'react';
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
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { TimeSeries, TimeSeriesIntraDayResponse } from '../types/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeScale);

type VolumeDataPoint = {
  x: number;
  y: number;
  backgroundColor: string;
  borderColor: string;
};

const VolumeChart = ({ data, interval }: { data: TimeSeriesIntraDayResponse; interval: string }) => {
  const timeSeriesKey = `Time Series (${interval})`;
  const timeSeries = data[timeSeriesKey] as TimeSeries;
  const volumeData = Object.keys(timeSeries)
    .map((time) => {
      const open = parseFloat(timeSeries[time]['1. open']);
      const close = parseFloat(timeSeries[time]['4. close']);
      const color = close > open ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)';
      const borderColor = close > open ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)';

      return {
        x: new Date(time).getTime(),
        y: parseInt(timeSeries[time]['5. volume'], 10),
        backgroundColor: color,
        borderColor: borderColor,
      };
    })
    .reverse();

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Volume Data for ${data['Meta Data']['2. Symbol']}`,
      },
      tooltip: {
        callbacks: {
          label: (context) => `Volume: ${(context.raw as VolumeDataPoint).y}`,
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
          text: 'Volume',
        },
      },
    },
  };

  const chartDataset: ChartData<'bar', VolumeDataPoint[]> = {
    datasets: [
      {
        label: 'Volume',
        data: volumeData,
        backgroundColor: volumeData.map((point) => point.backgroundColor),
        borderColor: volumeData.map((point) => point.borderColor),
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartDataset} options={chartOptions} />;
};

export default VolumeChart;
