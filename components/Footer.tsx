"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-200 dark:border-white/10 mt-20 bg-gray-50 dark:bg-transparent transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <motion.h3
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-2xl font-bold bg-gradient-to-r from-[#00c853] via-[#ffd600] to-[#00c853] bg-[length:200%_100%] bg-clip-text text-transparent mb-4"
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", text: "Home" },
                { href: "/products", text: "Products" },
                { href: "/cart", text: "Cart" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href={link.href} className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors block">
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { href: "#", text: "Help Center" },
                { href: "#", text: "Contact Us" },
                { href: "#", text: "Privacy Policy" }
              ].map((link, index) => (
                <motion.li
                  key={link.text}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href={link.href} className="text-gray-600 dark:text-[#d1d1d1] hover:text-[#00c853] transition-colors block">
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-[#d1d1d1]/70"
        >
          <p>&copy; {new Date().getFullYear()} CryptoCart. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}




