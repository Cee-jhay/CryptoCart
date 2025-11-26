"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, Coins } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { categories } from "@/data/products";
import { categoryToSlug } from "@/lib/category-utils";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import ThemeToggle with SSR disabled to prevent hydration issues
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
  loading: () => (
    <div className="relative h-9 w-9 flex items-center justify-center">
      <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
    </div>
  ),
});

export default function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#0b0b0b] shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#00c853] to-[#ffd600] bg-clip-text text-transparent">
              CryptoCart
            </span>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link
              href="/"
              className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-lg"
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors font-medium flex items-center gap-2 text-lg"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                Categories
                <Menu size={18} />
              </button>
              {isCategoryOpen && (
                <div
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  onMouseLeave={() => setIsCategoryOpen(false)}
                  className="absolute top-full left-0 mt-4 w-64 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl border border-gray-200 dark:border-white/10 p-4"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(1).map((category) => (
                      <Link
                        key={category}
                        href={`/category/${categoryToSlug(category)}`}
                        className="text-sm text-gray-700 dark:text-[#d1d1d1] hover:text-[#00c853] hover:bg-gray-100 dark:hover:bg-white/5 p-2 rounded transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center bg-gray-100 dark:bg-[#1a1a1a] rounded-full px-4 py-2 gap-2 flex-1 max-w-md border border-gray-300 dark:border-white/10">
              <Search size={20} className="text-gray-400 dark:text-[#d1d1d1]" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none flex-1 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#d1d1d1]"
              />
            </div>
          </div>

          {/* Cart Icon, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingCart size={24} className="text-gray-900 dark:text-white" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#00c853] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu size={24} className="text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-col gap-4">
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#d1d1d1]"
                />
              </div>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors py-2 text-lg px-4"
              >
                Home
              </Link>
              <div className="text-gray-900 dark:text-[#d1d1d1] font-semibold py-2 text-lg px-4">Categories</div>
              <div className="grid grid-cols-2 gap-2 px-4">
                {categories.slice(1).map((category) => (
                  <Link
                    key={category}
                    href={`/category/${categoryToSlug(category)}`}
                    className="text-sm text-gray-700 dark:text-[#d1d1d1] hover:text-[#00c853] py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
