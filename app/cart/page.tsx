"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "@/components/CartItem";
import CheckoutCard from "@/components/CheckoutCard";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-12 text-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10"
          >
            <ShoppingBag size={64} className="mx-auto text-gray-300 dark:text-[#d1d1d1]/30 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-[#d1d1d1] mb-6">
              Start shopping to add items to your cart
            </p>
            <Link href="/products">
              <Button size="lg">
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Shopping <span className="text-[#00c853]">Cart</span>
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end pt-4"
            >
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-400 border-red-400/30 hover:bg-red-400/10"
              >
                Clear Cart
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <CheckoutCard onCheckout={() => window.location.href = "/checkout"} />
          </div>
        </div>
      </div>
    </div>
  );
}
