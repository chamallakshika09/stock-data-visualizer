import { MetaData } from '../types/api';

const MetaDataDisplay = ({ metaData }: { metaData: MetaData }) => {
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold">Meta Data</h2>
      {Object.keys(metaData).map((key) => (
        <p key={key}>
          <strong>{key.slice(3)}:</strong> {metaData[key as keyof MetaData]}
        </p>
      ))}
    </div>
  );
};

export default MetaDataDisplay;
