'use client';

import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LuxeStore
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium quality products with exceptional design. Elevate your lifestyle with our curated collections.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Shop</h3>
            <ul className="space-y-2">
              {['All Products', 'Men Collection', 'Women Collection', 'Electronics', 'Jewelery'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Returns & Refunds', 'Shipping Info', 'Size Guide', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-3">Get 10% off your first order</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} LuxeStore. All rights reserved. | Built with Next.js & Tailwind
        </div>
      </div>
    </footer>
  );
};