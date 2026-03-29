/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1 hover:text-purple-600 transition">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">{product.category}</p>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating.rate))}
            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.rating.count})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};