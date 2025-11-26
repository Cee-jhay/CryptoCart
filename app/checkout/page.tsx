"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { Wallet, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiDogecoin } from "react-icons/si";

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "card">("crypto");
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const subtotal = getTotalPrice();
  const shipping = 0;
  const tax = subtotal * 0.1;
  const finalTotal = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (paymentMethod === "crypto") {
      setShowWalletDialog(true);
    } else {
      // Handle card payment
      setPaymentComplete(true);
    }
  };

  const handleCryptoPayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setShowWalletDialog(false);
      setPaymentComplete(true);
    }, 2000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-12 text-center max-w-2xl mx-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10"
          >
            <CheckCircle size={64} className="mx-auto text-[#00c853] mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 dark:text-[#d1d1d1] mb-6">
              Your order has been confirmed. You will receive a confirmation email shortly.
            </p>
            <Link href="/">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-12 text-center max-w-2xl mx-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10"
          >
            <AlertCircle size={64} className="mx-auto text-gray-300 dark:text-[#d1d1d1]/30 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-[#d1d1d1] mb-6">
              Add items to your cart before checkout
            </p>
            <Link href="/products">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/cart">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Method & Billing */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Payment Method</CardTitle>
                <CardDescription className="text-gray-600 dark:text-[#d1d1d1]">
                  Choose your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod("crypto")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "crypto"
                        ? "border-[#00c853] bg-[#00c853]/10"
                        : "border-gray-200 dark:border-white/10 glass hover:border-gray-300 dark:hover:border-white/20"
                    }`}
                  >
                    <Wallet className="h-6 w-6 text-[#00c853] mb-2" />
                    <p className="text-gray-900 dark:text-white font-semibold">Crypto</p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-[#00c853] bg-[#00c853]/10"
                        : "border-gray-200 dark:border-white/10 glass hover:border-gray-300 dark:hover:border-white/20"
                    }`}
                  >
                    <Wallet className="h-6 w-6 text-[#ffd600] mb-2" />
                    <p className="text-gray-900 dark:text-white font-semibold">Card</p>
                  </button>
                </div>

                {paymentMethod === "crypto" && (
                  <div className="glass rounded-xl p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <p className="text-gray-700 dark:text-[#d1d1d1] mb-3">Accepted Cryptocurrencies:</p>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 glass rounded-lg p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <FaBitcoin className="h-5 w-5 text-[#ffd600]" />
                        <span className="text-gray-900 dark:text-white text-sm">BTC</span>
                      </div>
                      <div className="flex items-center gap-2 glass rounded-lg p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <FaEthereum className="h-5 w-5 text-[#627EEA]" />
                        <span className="text-gray-900 dark:text-white text-sm">ETH</span>
                      </div>
                      <div className="flex items-center gap-2 glass rounded-lg p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <SiLitecoin className="h-5 w-5 text-[#345D9D]" />
                        <span className="text-gray-900 dark:text-white text-sm">LTC</span>
                      </div>
                      <div className="flex items-center gap-2 glass rounded-lg p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <SiDogecoin className="h-5 w-5 text-[#C2A633]" />
                        <span className="text-gray-900 dark:text-white text-sm">DOGE</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 pt-4">
                  <h3 className="text-gray-900 dark:text-white font-semibold">Billing Information</h3>
                  <Input
                    placeholder="Full Name"
                    value={billingInfo.name}
                    onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={billingInfo.email}
                    onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                  />
                  <Input
                    placeholder="Address"
                    value={billingInfo.address}
                    onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="City"
                      value={billingInfo.city}
                      onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                    />
                    <Input
                      placeholder="ZIP Code"
                      value={billingInfo.zip}
                      onChange={(e) => setBillingInfo({ ...billingInfo, zip: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Order Summary</CardTitle>
                <CardDescription className="text-gray-600 dark:text-[#d1d1d1]">
                  {items.length} {items.length === 1 ? "item" : "items"} in your order
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">{item.name}</p>
                        <p className="text-gray-600 dark:text-[#d1d1d1]">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600 dark:text-[#d1d1d1]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-[#d1d1d1]">
                    <span>Shipping</span>
                    <span className="text-[#00c853]">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-[#d1d1d1]">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-white/10 pt-4 flex justify-between">
                    <span className="text-gray-900 dark:text-white font-semibold text-lg">Total</span>
                    <span className="text-[#00c853] font-bold text-xl">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  <Wallet className="h-5 w-5 mr-2" />
                  Complete Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Crypto Wallet Dialog */}
      <Dialog open={showWalletDialog} onOpenChange={setShowWalletDialog}>
        <DialogContent className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">Connect Crypto Wallet</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-[#d1d1d1]">
              Connect your wallet to complete the payment
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="glass rounded-xl p-4 text-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">Payment Amount</p>
              <p className="text-2xl font-bold text-[#00c853]">${finalTotal.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <Button
                onClick={handleCryptoPayment}
                className="w-full"
                size="lg"
              >
                <FaEthereum className="h-5 w-5 mr-2" />
                Connect MetaMask
              </Button>
              <Button
                variant="outline"
                onClick={handleCryptoPayment}
                className="w-full"
                size="lg"
              >
                <FaBitcoin className="h-5 w-5 mr-2" />
                Connect WalletConnect
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
