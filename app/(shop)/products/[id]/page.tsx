// app/(shop)/products/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProduct } from '@/lib/fetch';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(Number(id));
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/products" className="text-purple-600 hover:text-purple-700 flex items-center gap-2">
          ← Back to Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            {product.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 capitalize">{product.category}</p>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </div>
            <span className="text-gray-600 dark:text-gray-300">({product.rating.count} reviews)</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${product.price}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-300 dark:border-gray-700 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                -
              </button>
              <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
            <Button size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}