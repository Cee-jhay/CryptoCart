"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 mt-20 bg-gray-50 dark:bg-transparent transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-[#00c853] to-[#ffd600] bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              CryptoCart
            </motion.h3>
            <p className="text-gray-600 dark:text-[#d1d1d1] mb-4">
              Shop Smarter With Crypto.
            </p>
            <p className="text-sm text-gray-500 dark:text-[#d1d1d1]/70">
              The future of e-commerce is here. Pay with cryptocurrency and experience seamless shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-[#d1d1d1]/70">
          <p>&copy; {new Date().getFullYear()} CryptoCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




