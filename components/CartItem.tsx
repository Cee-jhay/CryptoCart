"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem as CartItemType } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="glass rounded-xl p-4 flex gap-4 items-center"
    >
      <Link href={`/product/${item.id}`} className="relative w-20 h-20 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold mb-1 truncate">{item.name}</h3>
        <p className="text-[#00c853] font-bold text-lg">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 glass rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}

