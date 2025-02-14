const Loading = () => {
  return (
    <div className="bg-white dark:bg-[#111111] lg:rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20 pt-12">
      <div className="animate-pulse">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="h-[400px] w-full bg-gray-200 dark:bg-gray-700 rounded-xl mb-10" />
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
