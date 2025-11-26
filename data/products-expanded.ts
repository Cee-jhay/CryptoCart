import { Product } from "@/types/product";

// Helper to generate product with images array and legacy image support
function createProduct(product: Omit<Product, 'images' | 'image'> & { images: string[] }): Product {
  return {
    ...product,
    images: product.images,
    image: product.images[0], // Legacy support
    reviewCount: product.reviewCount || product.reviews,
    reviews: product.reviewCount || product.reviews,
  };
}

export const products: Product[] = [
  // Electronics (15 products)
  createProduct({
    id: "1",
    name: "Wireless Bluetooth Earbuds Pro",
    description: "Premium noise-cancelling wireless earbuds with 30-hour battery life and crystal-clear sound quality",
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 12450,
    sold: 89200,
    inStock: true,
    isOnSale: true,
    badge: "-47%"
  }),
  createProduct({
    id: "2",
    name: "Smart Watch Pro Series 9",
    description: "Advanced fitness tracker with heart rate monitor, GPS, and 7-day battery life",
    price: 249.99,
    originalPrice: 399.99,
    discount: 38,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 8932,
    sold: 45600,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "3",
    name: "Wireless Mouse Ergonomic",
    description: "Ergonomic wireless mouse with long battery life and precision tracking",
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.5,
    reviewCount: 12340,
    sold: 78000,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "4",
    name: "4K Ultra HD Smart TV 55\"",
    description: "55-inch 4K UHD Smart TV with HDR, voice control, and streaming apps",
    price: 449.99,
    originalPrice: 799.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 5678,
    sold: 12300,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "5",
    name: "Laptop Stand Aluminum",
    description: "Adjustable aluminum laptop stand for better ergonomics and cooling",
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "6",
    name: "Mechanical Keyboard RGB",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    price: 89.99,
    originalPrice: 149.99,
    discount: 40,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 7890,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "7",
    name: "USB-C Hub 7-in-1",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging",
    price: 39.99,
    originalPrice: 69.99,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.5,
    reviewCount: 4567,
    sold: 15600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "8",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices",
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.4,
    reviewCount: 8901,
    sold: 34500,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "9",
    name: "Bluetooth Speaker Portable",
    description: "Waterproof portable Bluetooth speaker with 360° sound and 20-hour battery",
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 6789,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "10",
    name: "Webcam HD 1080p",
    description: "Full HD 1080p webcam with auto-focus and built-in microphone",
    price: 49.99,
    originalPrice: 89.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1587825147138-346c006b3f49?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587825147138-346c006b3f49?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "11",
    name: "Tablet 10.1\" Android",
    description: "10.1-inch Android tablet with 64GB storage and HD display",
    price: 149.99,
    originalPrice: 299.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.5,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "12",
    name: "Security Camera WiFi",
    description: "Wireless security camera with night vision, motion detection, and app control",
    price: 79.99,
    originalPrice: 159.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 6789,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "13",
    name: "Gaming Headset 7.1",
    description: "Surround sound gaming headset with noise cancellation and RGB lighting",
    price: 89.99,
    originalPrice: 149.99,
    discount: 40,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.6,
    reviewCount: 5678,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "14",
    name: "External SSD 1TB",
    description: "High-speed external SSD with USB-C connectivity and 1000MB/s read speed",
    price: 99.99,
    originalPrice: 179.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.8,
    reviewCount: 3456,
    sold: 12300,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "15",
    name: "Smart Home Hub",
    description: "Central hub for controlling all your smart home devices with voice commands",
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Electronics",
    rating: 4.7,
    reviewCount: 2345,
    sold: 8900,
    inStock: true,
    isOnSale: true,
    isNew: true
  }),

  // Clothing (12 products)
  createProduct({
    id: "16",
    name: "Cotton T-Shirt Pack (3-Pack)",
    description: "Premium 100% cotton t-shirts in assorted colors - comfortable and durable",
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.4,
    reviewCount: 5678,
    sold: 89000,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "17",
    name: "Denim Jeans Classic Fit",
    description: "Classic fit denim jeans with stretch comfort and modern styling",
    price: 49.99,
    originalPrice: 89.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 4567,
    sold: 34500,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "18",
    name: "Hooded Sweatshirt",
    description: "Soft fleece hooded sweatshirt with kangaroo pocket and drawstring hood",
    price: 39.99,
    originalPrice: 69.99,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 7890,
    sold: 45600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "19",
    name: "Running Shorts Athletic",
    description: "Lightweight moisture-wicking running shorts with built-in compression liner",
    price: 29.99,
    originalPrice: 54.99,
    discount: 45,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 3456,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "20",
    name: "Leather Jacket Classic",
    description: "Genuine leather jacket with quilted lining and multiple pockets",
    price: 149.99,
    originalPrice: 299.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.7,
    reviewCount: 2345,
    sold: 8900,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "21",
    name: "Wool Winter Coat",
    description: "Warm wool blend winter coat with detachable hood and multiple pockets",
    price: 129.99,
    originalPrice: 249.99,
    discount: 48,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 3456,
    sold: 12300,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "22",
    name: "Polo Shirt Classic",
    description: "Classic polo shirt in premium cotton with embroidered logo",
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 4567,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "23",
    name: "Yoga Pants High-Waist",
    description: "High-waist yoga pants with moisture-wicking fabric and four-way stretch",
    price: 39.99,
    originalPrice: 69.99,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 5678,
    sold: 34500,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "24",
    name: "Dress Shirt Formal",
    description: "Classic formal dress shirt with button-down collar and French cuffs",
    price: 44.99,
    originalPrice: 79.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "25",
    name: "Baseball Cap Adjustable",
    description: "Classic baseball cap with adjustable strap and embroidered logo",
    price: 19.99,
    originalPrice: 34.99,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.4,
    reviewCount: 6789,
    sold: 45600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "26",
    name: "Sneakers Casual",
    description: "Comfortable casual sneakers with cushioned sole and breathable mesh upper",
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.6,
    reviewCount: 8901,
    sold: 56700,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "27",
    name: "Windbreaker Jacket",
    description: "Lightweight windbreaker jacket with water-resistant coating and zippered pockets",
    price: 49.99,
    originalPrice: 89.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop"
    ],
    category: "Clothing",
    rating: 4.5,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),

  // Home & Kitchen (12 products)
  createProduct({
    id: "28",
    name: "Stainless Steel Cookware Set (10-Piece)",
    description: "Professional-grade non-stick cookware set with heat-resistant handles",
    price: 89.99,
    originalPrice: 179.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.7,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "29",
    name: "LED Desk Lamp Adjustable",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.5,
    reviewCount: 7890,
    sold: 45600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "30",
    name: "Coffee Maker Programmable",
    description: "12-cup programmable coffee maker with auto-shutoff and brew strength control",
    price: 59.99,
    originalPrice: 119.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1517668808823-bfdb8d0c35f0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517668808823-bfdb8d0c35f0?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.6,
    reviewCount: 5678,
    sold: 34500,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "31",
    name: "Air Fryer XL 6-Quart",
    description: "Large capacity air fryer with digital display and multiple cooking presets",
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.7,
    reviewCount: 8901,
    sold: 27800,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "32",
    name: "Bedding Set Queen Size",
    description: "Luxury 4-piece bedding set with 100% cotton sheets and duvet cover",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.6,
    reviewCount: 4567,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "33",
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with app control, mapping, and self-charging",
    price: 199.99,
    originalPrice: 399.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.8,
    reviewCount: 6789,
    sold: 15600,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "34",
    name: "Stand Mixer Professional",
    description: "5-quart stand mixer with multiple attachments and 10-speed control",
    price: 249.99,
    originalPrice: 449.99,
    discount: 44,
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.7,
    reviewCount: 3456,
    sold: 8900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "35",
    name: "Smart Thermostat WiFi",
    description: "WiFi-enabled smart thermostat with app control and energy savings",
    price: 129.99,
    originalPrice: 249.99,
    discount: 48,
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.6,
    reviewCount: 2345,
    sold: 12300,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "36",
    name: "Kitchen Knife Set (8-Piece)",
    description: "Professional chef's knife set with wooden block and sharpening steel",
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.7,
    reviewCount: 5678,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "37",
    name: "Bath Towel Set (6-Piece)",
    description: "Luxury bath towel set with ultra-soft cotton and quick-dry technology",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.6,
    reviewCount: 4567,
    sold: 34500,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "38",
    name: "Dining Table Set (6-Chair)",
    description: "Modern dining table set with 6 upholstered chairs and extendable table",
    price: 449.99,
    originalPrice: 899.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.8,
    reviewCount: 2345,
    sold: 5600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "39",
    name: "Storage Baskets Set (3-Pack)",
    description: "Decorative storage baskets with handles for organizing any room",
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop"
    ],
    category: "Home & Kitchen",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),

  // Toys & Games (8 products)
  createProduct({
    id: "40",
    name: "Action Figure Collectible Set",
    description: "Premium collectible action figures - 5-piece set with accessories",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.8,
    reviewCount: 2345,
    sold: 12300,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "41",
    name: "Board Game Collection",
    description: "Classic board game collection with 6 popular games for family fun",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.7,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "42",
    name: "LEGO Building Set",
    description: "Creative building set with 1000+ pieces for endless construction fun",
    price: 59.99,
    originalPrice: 119.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.9,
    reviewCount: 5678,
    sold: 34500,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "43",
    name: "Remote Control Drone",
    description: "HD camera drone with GPS, auto-return, and 30-minute flight time",
    price: 89.99,
    originalPrice: 179.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.6,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "44",
    name: "Puzzle Set 1000-Piece",
    description: "Premium 1000-piece jigsaw puzzle with vibrant artwork",
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "45",
    name: "RC Car Racing",
    description: "High-speed RC car with 2.4GHz remote control and rechargeable battery",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.6,
    reviewCount: 2345,
    sold: 12300,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "46",
    name: "Building Blocks Set",
    description: "Educational building blocks set with 500+ pieces and storage box",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.7,
    reviewCount: 4567,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "47",
    name: "Card Game Collection",
    description: "Classic card games collection with 10 popular games in one set",
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606166188517-c0ec07e0e143?w=800&h=800&fit=crop"
    ],
    category: "Toys & Games",
    rating: 4.6,
    reviewCount: 3456,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),

  // Beauty & Health (10 products)
  createProduct({
    id: "48",
    name: "Skincare Routine Complete Set",
    description: "5-step complete skincare routine with cleanser, toner, serum, moisturizer, and SPF",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.6,
    reviewCount: 6789,
    sold: 34500,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "49",
    name: "Electric Toothbrush Sonic",
    description: "Sonic electric toothbrush with 5 cleaning modes and 2-week battery life",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.7,
    reviewCount: 8901,
    sold: 45600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "50",
    name: "Hair Dryer Professional",
    description: "Ionic hair dryer with multiple heat settings and diffuser attachment",
    price: 59.99,
    originalPrice: 119.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.5,
    reviewCount: 5678,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "51",
    name: "Fitness Tracker Watch",
    description: "Advanced fitness tracker with heart rate, sleep tracking, and 7-day battery",
    price: 79.99,
    originalPrice: 149.99,
    discount: 47,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.6,
    reviewCount: 12340,
    sold: 67800,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "52",
    name: "Makeup Brush Set (12-Piece)",
    description: "Professional makeup brush set with synthetic bristles and travel case",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.6,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "53",
    name: "Face Mask Set (5-Pack)",
    description: "Hydrating face mask set with natural ingredients for all skin types",
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "54",
    name: "Massage Gun Professional",
    description: "Deep tissue massage gun with 6 speed settings and 4 attachments",
    price: 99.99,
    originalPrice: 199.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.7,
    reviewCount: 5678,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "55",
    name: "Essential Oil Diffuser",
    description: "Ultrasonic essential oil diffuser with LED lights and timer function",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.6,
    reviewCount: 4567,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "56",
    name: "Shower Head Filter",
    description: "Chlorine filter shower head with 15-stage filtration system",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "57",
    name: "Weighted Blanket 15lbs",
    description: "Therapeutic weighted blanket for better sleep and anxiety relief",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=800&fit=crop"
    ],
    category: "Beauty & Health",
    rating: 4.7,
    reviewCount: 5678,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),

  // Sports & Outdoors (10 products)
  createProduct({
    id: "58",
    name: "Yoga Mat Premium Non-Slip",
    description: "Eco-friendly non-slip yoga mat with carrying strap and alignment lines",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 4567,
    sold: 28900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "59",
    name: "Running Shoes Lightweight",
    description: "Lightweight running shoes with cushioned sole and breathable mesh upper",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.6,
    reviewCount: 8901,
    sold: 56700,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "60",
    name: "Dumbbell Set Adjustable",
    description: "Adjustable dumbbell set from 5-50 lbs with quick-change weight system",
    price: 149.99,
    originalPrice: 299.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.8,
    reviewCount: 3456,
    sold: 12300,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "61",
    name: "Camping Tent 4-Person",
    description: "Waterproof 4-person camping tent with rainfly and easy setup",
    price: 89.99,
    originalPrice: 179.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 5678,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "62",
    name: "Bicycle Helmet Safety",
    description: "Ventilated bicycle helmet with MIPS technology and adjustable fit system",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.6,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "63",
    name: "Resistance Bands Set",
    description: "5-piece resistance bands set with door anchor and exercise guide",
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.6,
    reviewCount: 3456,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "64",
    name: "Hiking Backpack 40L",
    description: "Waterproof hiking backpack with hydration system and multiple compartments",
    price: 79.99,
    originalPrice: 159.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 5678,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "65",
    name: "Jump Rope Adjustable",
    description: "Professional speed jump rope with adjustable length and ball bearings",
    price: 14.99,
    originalPrice: 29.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.5,
    reviewCount: 4567,
    sold: 34500,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "66",
    name: "Water Bottle Insulated",
    description: "Stainless steel insulated water bottle keeps drinks cold for 24 hours",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.6,
    reviewCount: 6789,
    sold: 45600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "67",
    name: "Exercise Mat Premium",
    description: "Extra-thick exercise mat with non-slip surface and carrying strap",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop"
    ],
    category: "Sports & Outdoors",
    rating: 4.7,
    reviewCount: 4567,
    sold: 27800,
    inStock: true,
    isOnSale: true
  }),

  // Jewelry & Accessories (6 products)
  createProduct({
    id: "68",
    name: "Silver Necklace Sterling",
    description: "925 sterling silver pendant necklace with elegant chain design",
    price: 59.99,
    originalPrice: 119.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.7,
    reviewCount: 3456,
    sold: 15600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "69",
    name: "Leather Watch Classic",
    description: "Classic leather strap watch with sapphire crystal and water resistance",
    price: 129.99,
    originalPrice: 259.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.8,
    reviewCount: 2345,
    sold: 8900,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "70",
    name: "Sunglasses Aviator",
    description: "Polarized aviator sunglasses with UV400 protection and metal frame",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.6,
    reviewCount: 6789,
    sold: 34500,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "71",
    name: "Leather Wallet RFID Blocking",
    description: "Genuine leather wallet with RFID blocking technology and multiple card slots",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.5,
    reviewCount: 5678,
    sold: 27800,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
  createProduct({
    id: "72",
    name: "Gold Earrings Stud",
    description: "14K gold plated stud earrings with cubic zirconia stones",
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.6,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "73",
    name: "Leather Belt Classic",
    description: "Genuine leather belt with adjustable sizing and classic buckle",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop"
    ],
    category: "Jewelry & Accessories",
    rating: 4.5,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),

  // Books (4 products)
  createProduct({
    id: "74",
    name: "Best Seller Novel Collection",
    description: "Set of 5 bestselling novels in hardcover with beautiful covers",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop"
    ],
    category: "Books",
    rating: 4.7,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "75",
    name: "Cookbook Professional Chef",
    description: "Comprehensive cookbook with 500+ recipes from professional chefs",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    ],
    category: "Books",
    rating: 4.6,
    reviewCount: 4567,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "76",
    name: "Self-Help Book Collection",
    description: "Inspirational self-help book collection with 3 bestsellers",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop"
    ],
    category: "Books",
    rating: 4.5,
    reviewCount: 5678,
    sold: 15600,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "77",
    name: "Children's Book Set (10-Book)",
    description: "Educational children's book set with colorful illustrations and stories",
    price: 34.99,
    originalPrice: 69.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop"
    ],
    category: "Books",
    rating: 4.8,
    reviewCount: 2345,
    sold: 12300,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),

  // Automotive (5 products)
  createProduct({
    id: "78",
    name: "Car Phone Mount Magnetic",
    description: "Strong magnetic car phone mount with 360° rotation and easy installation",
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
    ],
    category: "Automotive",
    rating: 4.6,
    reviewCount: 8901,
    sold: 45600,
    inStock: true,
    isOnSale: true,
    badge: "-50%"
  }),
  createProduct({
    id: "79",
    name: "Car Charger Fast Charging",
    description: "Dual USB fast charging car charger with LED indicator and safety protection",
    price: 14.99,
    originalPrice: 29.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
    ],
    category: "Automotive",
    rating: 4.5,
    reviewCount: 12340,
    sold: 67800,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "80",
    name: "Dash Cam HD 1080p",
    description: "Full HD dash cam with night vision, loop recording, and G-sensor",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
    ],
    category: "Automotive",
    rating: 4.7,
    reviewCount: 5678,
    sold: 23400,
    inStock: true,
    isOnSale: true,
    badge: "Hot"
  }),
  createProduct({
    id: "81",
    name: "Car Floor Mats All-Weather",
    description: "Durable all-weather car floor mats with custom fit and easy cleaning",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
    ],
    category: "Automotive",
    rating: 4.6,
    reviewCount: 3456,
    sold: 18900,
    inStock: true,
    isOnSale: true
  }),
  createProduct({
    id: "82",
    name: "Car Air Freshener Set",
    description: "Premium car air freshener set with 6 different scents and long-lasting formula",
    price: 12.99,
    originalPrice: 24.99,
    discount: 48,
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
    ],
    category: "Automotive",
    rating: 4.4,
    reviewCount: 5678,
    sold: 34500,
    inStock: true,
    isOnSale: true,
    isNew: true,
    badge: "New"
  }),
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Toys & Games",
  "Beauty & Health",
  "Sports & Outdoors",
  "Jewelry & Accessories",
  "Books",
  "Automotive",
];




