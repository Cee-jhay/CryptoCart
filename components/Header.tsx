"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, Coins } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState, useEffect } from "react";
import { categories } from "@/data/products";
import { categoryToSlug } from "@/lib/category-utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white dark:bg-[#0b0b0b] shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.span 
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-3xl font-extrabold bg-gradient-to-r from-[#00c853] via-[#ffd600] to-[#00c853] bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                CryptoCart
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation & Search */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8 flex-1 justify-center"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href="/"
                className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-lg relative"
              >
                Home
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c853]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <div className="relative group">
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors font-medium flex items-center gap-2 text-lg"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                Categories
                <motion.div
                  animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={18} />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                    className="absolute top-full left-0 mt-4 w-64 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl border border-gray-200 dark:border-white/10 p-4"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {categories.slice(1).map((category, index) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/category/${categoryToSlug(category)}`}
                            className="text-sm text-gray-700 dark:text-[#d1d1d1] hover:text-[#00c853] hover:bg-gray-100 dark:hover:bg-white/5 p-2 rounded transition-colors block"
                          >
                            {category}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div 
              whileFocus={{ scale: 1.02 }}
              className="flex items-center bg-gray-100 dark:bg-[#1a1a1a] rounded-full px-4 py-2 gap-2 flex-1 max-w-md border border-gray-300 dark:border-white/10 focus-within:border-[#00c853] focus-within:ring-2 focus-within:ring-[#00c853]/20 transition-all"
            >
              <Search size={20} className="text-gray-400 dark:text-[#d1d1d1]" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none flex-1 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#d1d1d1]"
              />
            </motion.div>
          </motion.div>

          {/* Cart Icon, Theme Toggle & Mobile Menu Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="/cart"
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <ShoppingCart size={24} className="text-gray-900 dark:text-white" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="absolute top-0 right-0 bg-[#00c853] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu size={24} className="text-gray-900 dark:text-white" />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-white/10 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <div className="px-4">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#d1d1d1]"
                  />
                </div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 dark:text-[#d1d1d1] hover:text-gray-900 dark:hover:text-white transition-colors py-2 text-lg px-4 block"
                  >
                    Home
                  </Link>
                </motion.div>
                <div className="text-gray-900 dark:text-[#d1d1d1] font-semibold py-2 text-lg px-4">Categories</div>
                <div className="grid grid-cols-2 gap-2 px-4">
                  {categories.slice(1).map((category, index) => (
                    <motion.div
                      key={category}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Link
                        href={`/category/${categoryToSlug(category)}`}
                        className="text-sm text-gray-700 dark:text-[#d1d1d1] hover:text-[#00c853] py-1 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
