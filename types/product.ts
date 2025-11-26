export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in USD
  originalPrice?: number;
  discount?: number;
  images: string[]; // Array of image URLs
  category: string;
  rating?: number;
  reviewCount?: number;
  sold?: number;
  inStock: boolean;
  stockQuantity?: number; // Available stock quantity
  isNew?: boolean;
  isOnSale?: boolean;
  isFeatured?: boolean;
  badge?: string; // e.g., "Hot", "-30%", "New"
  tags?: string[]; // Product tags for filtering/search
  sku?: string; // Stock Keeping Unit
  weight?: number; // Product weight in kg
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: "cm" | "inch";
  };
  // Legacy support
  image?: string;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string; // For nested categories
  productCount?: number;
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  title?: string;
  comment: string;
  verifiedPurchase?: boolean;
  createdAt: Date;
  updatedAt?: Date;
  helpful?: number;
}


