import { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (symbol: string) => void }) => {
  const [symbol, setSymbol] = useState<string>('');

  const handleSearch = () => {
    onSearch(symbol);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Search"
        className="w-full max-w-md p-2 border border-gray-300 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
