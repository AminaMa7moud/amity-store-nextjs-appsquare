'use client';

import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/layout/HeroSection';
import { CategoriesSection } from '@/components/layout/CategoriesSection';
import { ProductCarousel } from '@/components/products/ProductCarousel';
import { ContactForm } from '@/components/forms/ContactForm';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { fetchProducts } from '@/lib/fetch';
import { Product } from '@/types';

export default function HomePage() {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setBestSellers(products.slice(0, 8));
        setNewArrivals(products.slice(4, 12));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <ProductCarousel products={bestSellers} title="Best Sellers" />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <ProductCarousel products={newArrivals} title="New Arrivals" />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  We&apos;d Love to <GradientText>Hear From You</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Have questions about your order, need product recommendations, or just want to say hello? 
                  Our team is here to help you 24/7. Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>support@luxestore.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}