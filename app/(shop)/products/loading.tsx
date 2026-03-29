import { ProductSkeleton } from '@/components/products/ProductSkeleton';

export default function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-6 w-64 bg-gray-200 dark:bg-gray-800 rounded mt-2 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}