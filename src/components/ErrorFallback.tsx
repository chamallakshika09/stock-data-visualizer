export const ErrorFallback = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
      <strong className="font-bold">Something went wrong.</strong>
      <span className="block sm:inline"> Please try again later.</span>
    </div>
  );
};
