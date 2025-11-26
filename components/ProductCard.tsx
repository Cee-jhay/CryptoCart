"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { ShoppingCart, Star, Coins } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(0);
  const [imageError, setImageError] = useState<string | null>(null);
  
  const productImages = product.images || (product.image ? [product.image] : []);
  const placeholderImage = 'https://via.placeholder.com/400x400/e5e7eb/9ca3af?text=Product+Image';
  
  // Get current image, fallback to placeholder if error or no image
  const getCurrentImage = () => {
    if (imageError) return placeholderImage;
    const img = productImages[imageIndex] || productImages[0];
    return img || placeholderImage;
  };
  
  const currentImage = getCurrentImage();
  const reviewCount = product.reviewCount || product.reviews || 0;
  const soldCount = product.sold || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success("Added to cart!", {
      description: product.name,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div className="h-full flex flex-col glass rounded-xl overflow-hidden hover:border-[#00c853]/40 transition-all duration-300 group bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/8 relative border border-gray-200 dark:border-white/10">
        {/* Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-white/5">
          <Link 
            href={`/product/${product.id}`} 
            className="absolute inset-0"
            onMouseEnter={() => productImages.length > 1 && !imageError && setImageIndex(1)}
            onMouseLeave={() => setImageIndex(0)}
          >
            {imageError === currentImage ? (
              // Fallback to regular img if Next.js Image fails
              <img
                src={placeholderImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  // Final fallback - hide broken image
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                onError={(e) => {
                  // If current image fails, try next image or set to placeholder
                  if (!imageError && productImages.length > imageIndex + 1) {
                    setImageIndex(imageIndex + 1);
                  } else {
                    setImageError(currentImage);
                  }
                }}
                unoptimized={false}
                priority={index < 4}
              />
            )}
          </Link>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.badge && (
              <div className={`px-2.5 py-1 rounded-md text-xs font-bold shadow-lg ${
                product.badge.includes("%") || product.badge.includes("-")
                  ? "bg-[#00c853] text-black"
                  : product.badge === "New"
                  ? "bg-[#ffd600] text-black"
                  : "bg-red-500 text-white"
              }`}>
                {product.badge}
              </div>
            )}
            {product.isNew && !product.badge && (
              <div className="bg-[#ffd600] text-black px-2.5 py-1 rounded-md text-xs font-bold shadow-lg">
                New
              </div>
            )}
            {product.isOnSale && !product.badge && product.discount && (
              <div className="bg-[#00c853] text-black px-2.5 py-1 rounded-md text-xs font-bold shadow-lg">
                -{product.discount}%
              </div>
            )}
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <span className="text-white font-semibold text-sm">Out of Stock</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-[#00c853] transition-colors text-sm leading-snug min-h-[2.5rem] group-hover:underline">
              {product.name}
            </h3>
          </Link>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.floor(product.rating!)
                        ? "fill-[#ffd600] text-[#ffd600]"
                        : "text-gray-300 dark:text-[#d1d1d1]/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#00c853] font-medium">
                {product.rating}
              </span>
              {reviewCount > 0 && (
                <span className="text-xs text-gray-500 dark:text-[#d1d1d1]/70">
                  ({reviewCount.toLocaleString()})
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 dark:text-[#d1d1d1]/60 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xs text-[#00c853] font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Sold Count */}
          {soldCount > 0 && (
            <div className="text-xs text-gray-500 dark:text-[#d1d1d1]/70 mb-3">
              {soldCount > 1000 ? `${(soldCount / 1000).toFixed(1)}K+` : soldCount}+ sold
            </div>
          )}

          {/* Crypto Payment Badge */}
          <div className="flex items-center gap-1 mb-3 text-xs text-[#00c853]">
            <Coins className="h-3.5 w-3.5" />
            <span>Pay with Crypto</span>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full mt-auto text-sm font-medium"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
