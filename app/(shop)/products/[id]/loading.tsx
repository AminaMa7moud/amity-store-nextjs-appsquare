// app/(shop)/products/[id]/loading.tsx
export default function ProductDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse">
        <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}