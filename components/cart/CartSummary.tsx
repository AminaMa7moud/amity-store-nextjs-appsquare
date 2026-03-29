'use client';

import { Button } from '@/components/ui/Button';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummary = ({ subtotal, shipping, total, onCheckout }: CartSummaryProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Order Summary</h3>
      <div className="space-y-3 text-gray-600 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 my-2"></div>
        <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
          <span>Total</span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
      <Button onClick={onCheckout} fullWidth className="mt-6">
        Proceed to Checkout
      </Button>
    </div>
  );
};