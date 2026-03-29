// app/(shop)/products/[id]/not-found.tsx
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">Product Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">
        The product you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/products"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition"
      >
        Browse All Products
      </Link>
    </div>
  );
}