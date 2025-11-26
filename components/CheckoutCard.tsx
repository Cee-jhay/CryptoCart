"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import { Wallet, CreditCard } from "lucide-react";

interface CheckoutCardProps {
  onCheckout: () => void;
}

export default function CheckoutCard({ onCheckout }: CheckoutCardProps) {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const total = getTotalPrice();

  const subtotal = total;
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const finalTotal = subtotal + shipping + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Order Summary</CardTitle>
          <CardDescription className="text-[#d1d1d1]">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[#d1d1d1]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#d1d1d1]">
              <span>Shipping</span>
              <span className="text-[#00c853]">Free</span>
            </div>
            <div className="flex justify-between text-[#d1d1d1]">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-white/10 pt-2 flex justify-between">
              <span className="text-white font-semibold text-lg">Total</span>
              <span className="text-[#00c853] font-bold text-xl">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <Button
              onClick={onCheckout}
              className="w-full"
              size="lg"
            >
              <Wallet className="h-5 w-5 mr-2" />
              Pay with Crypto
            </Button>
            <Button
              variant="outline"
              className="w-full"
              size="lg"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pay with Card
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}




