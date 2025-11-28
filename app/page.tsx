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
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-[#00c853] to-[#00e85c] text-black py-2 text-center text-sm font-medium overflow-hidden relative"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 relative z-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Coins className="h-4 w-4" />
          </motion.div>
          <span>Pay with Crypto (BTC, ETH, LTC, DOGE) or USD • Free Shipping on Orders $50+</span>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#00c853] via-[#00e85c] to-[#00c853] text-black py-8 relative overflow-hidden"
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-[#00c853] via-[#00e85c] via-[#ffd600] to-[#00c853] bg-[length:200%_100%] opacity-20"
        />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Shop More, Pay Less
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-6"
          >
            Lightning Deals • Limited Time Offers
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6 text-sm"
          >
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: Shield, text: "Secure Payments" },
              { icon: Coins, text: "Crypto Accepted" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Lightning Deals Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="h-6 w-6 text-[#ffd600]" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Lightning Deals</h2>
            <motion.span 
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(239, 68, 68, 0)",
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 0px rgba(239, 68, 68, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              Limited Time
            </motion.span>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
              View All →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        >
          {lightningDeals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </motion.section>

      {/* Limited Time Offers */}
      {limitedTime.length > 0 && (
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 py-12"
        >
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <motion.span 
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0px rgba(249, 115, 22, 0)",
                    "0 0 20px rgba(249, 115, 22, 0.5)",
                    "0 0 0px rgba(249, 115, 22, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded"
              >
                Last 2-3 Days
              </motion.span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Limited Time Offers</h2>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
                View All →
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          >
            {limitedTime.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Why Choose <span className="text-[#00c853]">CryptoCart</span>?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over $50", color: "#00c853" },
            { icon: Shield, title: "Secure Privacy", desc: "Safe payments guaranteed", color: "#00c853" },
            { icon: Coins, title: "Crypto Payments", desc: "BTC, ETH, LTC, DOGE", color: "#ffd600" },
            { icon: CreditCard, title: "Shop Now, Pay Later", desc: "Flexible payment options", color: "#00c853" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-6 glass rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`bg-[${feature.color}]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
              >
                <feature.icon className={`h-8 w-8 text-[${feature.color}]`} />
              </motion.div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-[#d1d1d1]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Trending Products */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Trending <span className="text-[#00c853]">Products</span>
          </h2>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/products" className="text-[#00c853] hover:text-[#00e85c] font-medium text-sm">
              View All →
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        >
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
