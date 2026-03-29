/* eslint-disable @next/next/no-img-element */
'use client';

import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/Button';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain rounded-lg bg-gray-100 dark:bg-gray-700"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 dark:text-white line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{item.category}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 transition"
            >
              -
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 transition"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};