"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#00c853]/20 via-transparent to-[#ffd600]/20 bg-[length:200%_200%]"
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => {
        const positions = [
          { x: "10%", y: "20%" },
          { x: "80%", y: "30%" },
          { x: "20%", y: "70%" },
          { x: "90%", y: "60%" },
          { x: "50%", y: "10%" },
          { x: "30%", y: "90%" },
        ];
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00c853] rounded-full opacity-30"
            initial={{
              x: positions[i].x,
              y: positions[i].y,
            }}
            animate={{
              y: [
                positions[i].y,
                `${parseFloat(positions[i].y) + (Math.random() * 20 - 10)}%`,
                positions[i].y,
              ],
              x: [
                positions[i].x,
                `${parseFloat(positions[i].x) + (Math.random() * 20 - 10)}%`,
                positions[i].x,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        );
      })}
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Animated Title with sparkles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-6"
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00c853] via-[#00e85c] via-[#ffd600] to-[#00c853] bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Welcome to CryptoCart
            </motion.h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="h-6 w-6 text-[#ffd600]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 -left-2"
            >
              <Sparkles className="h-5 w-5 text-[#00c853]" />
            </motion.div>
          </motion.div>

          {/* Animated Subtitle with typewriter effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#d1d1d1] mb-8 max-w-2xl mx-auto"
          >
            Shop Smarter With Crypto.
          </motion.p>

          {/* CTA Button with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products">
              <Button
                size="lg"
                className="group text-lg px-8 py-6 relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#00e85c] to-[#ffd600] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  Shop Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




