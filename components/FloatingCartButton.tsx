"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingCartButton() {
  const itemCount = useCartStore((state) => state.getItemCount());

  if (itemCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: 0,
          y: [0, -10, 0]
        }}
        exit={{ scale: 0, opacity: 0, rotate: 180 }}
        transition={{ 
          type: "spring", 
          stiffness: 200,
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link href="/cart">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(0, 200, 83, 0.4)",
                "0 0 20px rgba(0, 200, 83, 0.6)",
                "0 0 0px rgba(0, 200, 83, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Button
              size="lg"
              className="rounded-full h-14 w-14 p-0 shadow-2xl neon-green relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00e85c] to-[#ffd600] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ShoppingCart className="h-6 w-6" />
              </motion.div>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    scale: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -top-2 -right-2 bg-[#ffd600] text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-20 shadow-lg"
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </motion.span>
              )}
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}




