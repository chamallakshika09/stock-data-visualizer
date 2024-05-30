import { TimeSeriesIntraDayResponse } from '../types/api';
import CandlestickChart from './CandlestickChart';
import VolumeChart from './VolumeChart';

const CombinedChart = ({ data, interval }: { data: TimeSeriesIntraDayResponse; interval: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="w-full mb-8">
        <CandlestickChart data={data} interval={interval} />
      </div>
      <div className="w-full">
        <VolumeChart data={data} interval={interval} />
      </div>
    </div>
  );
};

export default CombinedChart;
