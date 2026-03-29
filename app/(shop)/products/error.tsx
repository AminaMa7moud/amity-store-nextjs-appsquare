'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function ProductsError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">Something went wrong</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-md">
        Failed to load products. Please try again.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}