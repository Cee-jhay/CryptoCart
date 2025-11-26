"use client";

import { use } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductGrid from "@/components/ProductGrid";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiDogecoin } from "react-icons/si";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/products">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square w-full glass rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-[#00c853] text-black px-4 py-2 rounded-full text-lg font-bold">
                -{product.discount}%
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              {product.rating && (
                <>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(product.rating!)
                            ? "text-[#ffd600] fill-[#ffd600]"
                            : "text-gray-300 dark:text-[#d1d1d1]/30"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-[#d1d1d1]">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-bold text-[#00c853]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 dark:text-[#d1d1d1]/70 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-700 dark:text-[#d1d1d1] mb-8 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600 dark:text-[#d1d1d1]">
                <Truck className="h-5 w-5 text-[#00c853]" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-[#d1d1d1]">
                <Shield className="h-5 w-5 text-[#00c853]" />
                <span>Secure crypto payments</span>
              </div>
              {product.sold && (
                <div className="text-gray-600 dark:text-[#d1d1d1]">
                  <span className="font-semibold text-[#00c853]">{product.sold}+</span> sold
                </div>
              )}
            </div>

            {/* Accepted Cryptocurrencies */}
            <div className="mb-8">
              <p className="text-gray-700 dark:text-[#d1d1d1] mb-3">Accepted Payments:</p>
              <div className="flex gap-3">
                <div className="glass rounded-lg p-3 flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <FaBitcoin className="h-6 w-6 text-[#ffd600]" />
                  <span className="text-gray-900 dark:text-white text-sm">BTC</span>
                </div>
                <div className="glass rounded-lg p-3 flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <FaEthereum className="h-6 w-6 text-[#627EEA]" />
                  <span className="text-gray-900 dark:text-white text-sm">ETH</span>
                </div>
                <div className="glass rounded-lg p-3 flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <SiLitecoin className="h-6 w-6 text-[#345D9D]" />
                  <span className="text-gray-900 dark:text-white text-sm">LTC</span>
                </div>
                <div className="glass rounded-lg p-3 flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <SiDogecoin className="h-6 w-6 text-[#C2A633]" />
                  <span className="text-gray-900 dark:text-white text-sm">DOGE</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => addItem(product)}
                disabled={!product.inStock}
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Link href="/cart" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related <span className="text-[#00c853]">Products</span>
            </h2>
            <ProductGrid products={relatedProducts} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
