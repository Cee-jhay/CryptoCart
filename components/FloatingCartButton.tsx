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
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link href="/cart">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 p-0 shadow-2xl neon-green relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-[#ffd600] text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              >
                {itemCount > 99 ? "99+" : itemCount}
              </motion.span>
            )}
          </Button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}




