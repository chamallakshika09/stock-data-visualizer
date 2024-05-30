type SelectorProps = {
  label: string;
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
};

const Selector = ({ label, options, selectedOption, onOptionChange }: SelectorProps) => {
  return (
    <div className="relative flex text-left items-center justify-center gap-3">
      <label className="mr-2">{label}:</label>
      <select
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        className="w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
