'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const categories = [
  {
    name: "Men's Fashion",
    slug: "men's clothing",
    icon: "👔",
    bg: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800c22?w=500",
  },
  {
    name: "Women's Fashion",
    slug: "women's clothing",
    icon: "👗",
    bg: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500",
  },
  {
    name: "Electronics",
    slug: "electronics",
    icon: "💻",
    bg: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  },
  {
    name: "Jewelery",
    slug: "jewelery",
    icon: "💍",
    bg: "from-yellow-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
  },
];

export const CategoriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Shop by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of products tailored for every need
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <AnimatedSection key={cat.slug} animation="fade-up" delay={idx * 100}>
              <Link href={`/products?category=${cat.slug}`}>
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card
                    hover={true}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} opacity-90 group-hover:opacity-70 transition-all duration-500 z-10`}></div>
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center p-4">
                        <div className="text-6xl mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          {cat.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                        <div className={`inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium transition-all duration-300 ${hoveredIndex === idx ? 'scale-105 bg-white/30' : ''}`}>
                          Shop Now →
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};