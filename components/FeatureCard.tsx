"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="h-full hover:border-[#00c853]/30 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-[#00c853]/20 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-[#00c853]" />
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-[#d1d1d1]">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}




