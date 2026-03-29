'use client';

import { useEffect, useState, useCallback } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { fetchProducts, fetchCategories } from '@/lib/fetch';
import { Product } from '@/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', category: '' });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [allProducts, allCategories] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setCategories(allCategories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const applyFilters = useCallback(() => {
    let result = [...products];
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
    setFilteredProducts(result);
  }, [products, filters]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleFilter = (newFilters: { search: string; category: string }) => {
    setFilters(newFilters);
  };

  if (loading) return <ProductGrid products={[]} loading={true} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          All Products
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Discover our curated collection of premium items
        </p>
      </div>
      <ProductFilters categories={categories} onFilter={handleFilter} />
      <ProductGrid products={filteredProducts} loading={false} />
    </div>
  );
}