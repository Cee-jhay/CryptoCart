"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Truck, CreditCard, Coins } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Get products with high discounts for lightning deals
  const lightningDeals = products
    .filter(p => p.discount && p.discount >= 75)
    .slice(0, 8);
  
  const trendingProducts = products
    .filter(p => p.sold && p.sold > 50000)
    .slice(0, 12);
  
  const limitedTime = products
    .filter(p => p.isOnSale && p.badge?.includes("limited"))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] transition-colors duration-200">
      {/* Top Banner - Crypto Payment Badge */}
      <div className="bg-gradient-to-r from-[#00c853] to-[#00e85c] text-black py-2 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <Coins className="h-4 w-4" />
          <span>Pay with Crypto (BTC, ETH, LTC, DOGE) or USD • Free Shipping on Orders $50+</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#00c853] via-[#00e85c] to-[#00c853] text-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop More, Pay Less
          </h1>
          <p className="text-xl mb-6">Lightning Deals • Limited Time Offers</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5" />
              <span>Crypto Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightning Deals Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-[#ffd600]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Lightning Deals</h2>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Limited Time</span>
          </div>
          <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {lightningDeals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Limited Time Offers */}
      {limitedTime.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Last 2-3 Days</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Limited Time Offers</h2>
            </div>
            <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {limitedTime.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Why Choose <span className="text-[#00c853]">CryptoCart</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 glass rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <div className="bg-[#00c853]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-[#00c853]" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">On orders over $50</p>
          </div>
          
          <div className="text-center p-6 glass rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <div className="bg-[#00c853]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#00c853]" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Privacy</h3>
            <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">Safe payments guaranteed</p>
          </div>
          
          <div className="text-center p-6 glass rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <div className="bg-[#ffd600]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Coins className="h-8 w-8 text-[#ffd600]" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Crypto Payments</h3>
            <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">BTC, ETH, LTC, DOGE</p>
          </div>
          
          <div className="text-center p-6 glass rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <div className="bg-[#00c853]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-[#00c853]" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shop Now, Pay Later</h3>
            <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">Flexible payment options</p>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Trending <span className="text-[#00c853]">Products</span>
          </h2>
          <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
