import { useState } from 'react';
import StockData from './components/StockData';
import SearchBar from './components/SearchBar';
import Selector from './components/Selector';
import { IntervalOptions, ViewOptions } from './types/ui';

const App = () => {
  const [symbol, setSymbol] = useState<string>('AAPL');
  const [view, setView] = useState<string>(ViewOptions.CHART_VIEW);
  const [interval, setInterval] = useState<string>(IntervalOptions.ONE_MIN);

  const handleSearch = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
  };

  return (
    <div className="App p-4">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline mb-4">Stock Dashboard</h1>
        <div className="flex justify-between items-center mb-4 space-x-4 flex-wrap">
          <SearchBar onSearch={handleSearch} />
          <Selector
            label="View"
            options={[ViewOptions.CHART_VIEW, ViewOptions.GRID_VIEW]}
            selectedOption={view}
            onOptionChange={handleViewChange}
          />
          <Selector
            label="Interval"
            options={[
              IntervalOptions.ONE_MIN,
              IntervalOptions.FIVE_MIN,
              IntervalOptions.FIFTEEN_MIN,
              IntervalOptions.THIRTY_MIN,
              IntervalOptions.SIXTY_MIN,
            ]}
            selectedOption={interval}
            onOptionChange={handleIntervalChange}
          />
        </div>
        <StockData symbol={symbol} view={view} interval={interval} />
      </header>
    </div>
  );
};

export default App;
