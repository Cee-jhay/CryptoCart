"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CategoryFiltersProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  inStockOnly: boolean;
  onInStockOnlyChange: (value: boolean) => void;
  onSaleOnly: boolean;
  onOnSaleOnlyChange: (value: boolean) => void;
  isNewOnly: boolean;
  onIsNewOnlyChange: (value: boolean) => void;
  maxPrice: number;
  isMobile?: boolean;
}

export default function CategoryFilters({
  priceRange,
  onPriceRangeChange,
  inStockOnly,
  onInStockOnlyChange,
  onSaleOnly,
  onOnSaleOnlyChange,
  isNewOnly,
  onIsNewOnlyChange,
  maxPrice,
  isMobile = false,
}: CategoryFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-600 dark:text-[#d1d1d1] mb-2 block">Min: ${priceRange[0]}</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00c853]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600 dark:text-[#d1d1d1] mb-2 block">Max: ${priceRange[1]}</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00c853]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#d1d1d1]">
            <span>${priceRange[0]}</span>
            <span>-</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <h3 className="text-gray-900 dark:text-white font-semibold">Filters</h3>
        
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#00c853] focus:ring-[#00c853] focus:ring-offset-0"
          />
          <span className="text-gray-700 dark:text-[#d1d1d1]">In Stock Only</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={onSaleOnly}
            onChange={(e) => onOnSaleOnlyChange(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#00c853] focus:ring-[#00c853] focus:ring-offset-0"
          />
          <span className="text-gray-700 dark:text-[#d1d1d1]">On Sale Only</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isNewOnly}
            onChange={(e) => onIsNewOnlyChange(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-[#00c853] focus:ring-[#00c853] focus:ring-offset-0"
          />
          <span className="text-gray-700 dark:text-[#d1d1d1]">New Arrivals</span>
        </label>
      </div>

      {/* Reset Filters */}
      <Button
        variant="outline"
        onClick={() => {
          onPriceRangeChange([0, maxPrice]);
          onInStockOnlyChange(false);
          onOnSaleOnlyChange(false);
          onIsNewOnlyChange(false);
        }}
        className="w-full"
        size="sm"
      >
        Reset Filters
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="md:hidden"
          size="sm"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-80 bg-white dark:bg-[#1a1a1a]">
            <SheetHeader>
              <SheetTitle className="text-gray-900 dark:text-white">Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <Card className="sticky top-24 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <FilterContent />
      </CardContent>
    </Card>
  );
}




