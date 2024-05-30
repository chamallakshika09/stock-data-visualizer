import { ViewOptions } from '../types/ui';
import useFetchStockData from '../hooks/useFetchStockData';
import CombinedChart from './CombinedChart';
import GridView from './GridView';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const StockData = ({ symbol, view, interval }: { symbol: string; view: string; interval: string }) => {
  const { data, loading, error } = useFetchStockData(symbol, interval);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data) {
    return (
      <div
        className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative my-4"
        role="alert"
      >
        <strong className="font-bold">No Data Available: </strong>
        <span className="block sm:inline">Please check the stock symbol and interval, or try again later.</span>
      </div>
    );
  }

  return (
    <div>
      {view === ViewOptions.CHART_VIEW ? (
        <CombinedChart data={data} interval={interval} />
      ) : (
        <GridView data={data} interval={interval} />
      )}
    </div>
  );
};

export default StockData;
