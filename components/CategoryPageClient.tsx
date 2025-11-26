"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilters from "@/components/CategoryFilters";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type SortOption = "default" | "price-low" | "price-high" | "newest" | "rating";

interface CategoryPageClientProps {
  initialProducts: Product[];
  categoryName: string;
  maxPrice: number;
  searchParams: { [key: string]: string | string[] | undefined };
}

const ITEMS_PER_PAGE = 12;

export default function CategoryPageClient({
  initialProducts,
  categoryName,
  maxPrice,
  searchParams,
}: CategoryPageClientProps) {
  const [searchQuery, setSearchQuery] = useState(
    (searchParams.search as string) || ""
  );
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.sort as SortOption) || "default"
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.minPrice) || 0,
    Number(searchParams.maxPrice) || maxPrice,
  ]);
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.inStock === "true"
  );
  const [onSaleOnly, setOnSaleOnly] = useState(
    searchParams.onSale === "true"
  );
  const [isNewOnly, setIsNewOnly] = useState(searchParams.isNew === "true");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.page) || 1
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...initialProducts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // In stock filter
    if (inStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    // On sale filter
    if (onSaleOnly) {
      filtered = filtered.filter((p) => p.isOnSale || p.discount);
    }

    // New arrivals filter
    if (isNewOnly) {
      filtered = filtered.filter((p) => p.isNew);
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
      case "newest":
        sorted.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return sorted;
  }, [
    initialProducts,
    searchQuery,
    priceRange,
    inStockOnly,
    onSaleOnly,
    isNewOnly,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1">
        <CategoryFilters
          priceRange={priceRange}
          onPriceRangeChange={(range) => {
            setPriceRange(range);
            handleFilterChange();
          }}
          inStockOnly={inStockOnly}
          onInStockOnlyChange={(value) => {
            setInStockOnly(value);
            handleFilterChange();
          }}
          onSaleOnly={onSaleOnly}
          onOnSaleOnlyChange={(value) => {
            setOnSaleOnly(value);
            handleFilterChange();
          }}
          isNewOnly={isNewOnly}
          onIsNewOnlyChange={(value) => {
            setIsNewOnly(value);
            handleFilterChange();
          }}
          maxPrice={maxPrice}
          isMobile={false}
        />
      </div>

      {/* Products Section */}
      <div className="lg:col-span-3">
        {/* Search and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="w-full md:w-auto md:flex-1 md:max-w-md">
              <SearchBar
                onSearch={(query) => {
                  setSearchQuery(query);
                  handleFilterChange();
                }}
                placeholder={`Search ${categoryName.toLowerCase()}...`}
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-sm text-gray-600 dark:text-[#d1d1d1] whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as SortOption);
                  handleFilterChange();
                }}
                className="glass rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00c853] flex-1 md:flex-none"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">
              Showing {paginatedProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}-
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedProducts.length)} of{" "}
              {filteredAndSortedProducts.length} products
            </p>
          </div>
        </motion.div>

        {/* Mobile Filters Button */}
        <div className="lg:hidden mb-6">
          <CategoryFilters
            priceRange={priceRange}
            onPriceRangeChange={(range) => {
              setPriceRange(range);
              handleFilterChange();
            }}
            inStockOnly={inStockOnly}
            onInStockOnlyChange={(value) => {
              setInStockOnly(value);
              handleFilterChange();
            }}
            onSaleOnly={onSaleOnly}
            onOnSaleOnlyChange={(value) => {
              setOnSaleOnly(value);
              handleFilterChange();
            }}
            isNewOnly={isNewOnly}
            onIsNewOnlyChange={(value) => {
              setIsNewOnly(value);
              handleFilterChange();
            }}
            maxPrice={maxPrice}
            isMobile={true}
          />
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <>
            <ProductGrid products={paginatedProducts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <div className="glass rounded-2xl p-12 max-w-md mx-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <p className="text-gray-600 dark:text-[#d1d1d1] text-lg mb-4">
                No products found matching your criteria.
              </p>
              <p className="text-gray-500 dark:text-[#d1d1d1]/70 text-sm mb-6">
                Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([0, maxPrice]);
                  setInStockOnly(false);
                  setOnSaleOnly(false);
                  setIsNewOnly(false);
                  setSortBy("default");
                  setCurrentPage(1);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}




