"use client";

import { useState, useMemo } from "react";
import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type SortOption = "default" | "price-low" | "price-high" | "name";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#00c853]">Products</span>
          </h1>
          <p className="text-gray-600 dark:text-[#d1d1d1] text-lg mb-2">
            Discover amazing products and pay with cryptocurrency
          </p>
          <p className="text-gray-500 dark:text-[#d1d1d1]/70 text-sm">
            Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? "product" : "products"}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <SearchBar onSearch={setSearchQuery} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="glass rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00c853]"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Sort by: Price (Low to High)</option>
              <option value="price-high">Sort by: Price (High to Low)</option>
              <option value="name">Sort by: Name</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProductGrid products={filteredAndSortedProducts} />
        </motion.div>
      </div>
    </div>
  );
}

