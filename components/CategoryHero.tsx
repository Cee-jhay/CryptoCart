"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CategoryHeroProps {
  categoryName: string;
  productCount: number;
  description?: string;
  heroImage?: string;
}

const categoryDescriptions: Record<string, string> = {
  "Electronics": "Discover the latest technology and gadgets to enhance your digital lifestyle",
  "Clothing": "Find stylish and comfortable clothing for every occasion",
  "Home & Kitchen": "Transform your living space with premium home and kitchen essentials",
  "Toys & Games": "Fun and educational toys and games for all ages",
  "Beauty & Health": "Look and feel your best with our beauty and wellness products",
  "Sports & Outdoors": "Gear up for your next adventure with quality sports and outdoor equipment",
  "Jewelry & Accessories": "Elegant jewelry and accessories to complete your look",
  "Books": "Explore our collection of books for every reader",
  "Automotive": "Everything you need for your vehicle and road trips",
};

const categoryImages: Record<string, string> = {
  "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
  "Clothing": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
  "Home & Kitchen": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
  "Toys & Games": "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=1200&h=600&fit=crop",
  "Beauty & Health": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=1200&h=600&fit=crop",
  "Sports & Outdoors": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=600&fit=crop",
  "Jewelry & Accessories": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop",
  "Books": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=600&fit=crop",
  "Automotive": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=600&fit=crop",
};

export default function CategoryHero({ 
  categoryName, 
  productCount, 
  description,
  heroImage 
}: CategoryHeroProps) {
  const categoryDescription = description || categoryDescriptions[categoryName] || "Discover amazing products in this category";
  const imageUrl = heroImage || categoryImages[categoryName] || "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 glass border border-gray-200 dark:border-white/10"
    >
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={categoryName}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {categoryName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-100 dark:text-[#d1d1d1] mb-2 max-w-2xl"
        >
          {categoryDescription}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-[#00c853] font-medium"
        >
          {productCount} {productCount === 1 ? "product" : "products"} available
        </motion.p>
      </div>
    </motion.div>
  );
}




