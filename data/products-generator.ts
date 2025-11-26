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

// Product templates for generating variations
const productTemplates = {
  Electronics: [
    { baseName: "Wireless Bluetooth Earbuds", basePrice: 79.99, baseOriginal: 149.99, imageId: "1590658268037-6bf12165a8df" },
    { baseName: "Smart Watch", basePrice: 249.99, baseOriginal: 399.99, imageId: "1523275335684-37898b6baf30" },
    { baseName: "Wireless Mouse", basePrice: 24.99, baseOriginal: 49.99, imageId: "1527814050087-3793815479db" },
    { baseName: "4K Smart TV", basePrice: 449.99, baseOriginal: 799.99, imageId: "1593359677879-a4bb92f829d1" },
    { baseName: "Laptop Stand", basePrice: 34.99, baseOriginal: 59.99, imageId: "1527864550417-7fd91fc51a46" },
    { baseName: "Mechanical Keyboard", basePrice: 89.99, baseOriginal: 149.99, imageId: "1587829741301-dc798b83add3" },
    { baseName: "USB-C Hub", basePrice: 39.99, baseOriginal: 69.99, imageId: "1625842268584-8f3296236761" },
    { baseName: "Wireless Charging Pad", basePrice: 19.99, baseOriginal: 39.99, imageId: "1609091839311-d5365f9ff1c8" },
    { baseName: "Bluetooth Speaker", basePrice: 59.99, baseOriginal: 99.99, imageId: "1608043152269-423dbba4e7e1" },
    { baseName: "Webcam HD", basePrice: 49.99, baseOriginal: 89.99, imageId: "1587825147138-346c006b3f49" },
    { baseName: "Tablet", basePrice: 149.99, baseOriginal: 299.99, imageId: "1544244015-0df4b3ffc6b0" },
    { baseName: "Security Camera", basePrice: 79.99, baseOriginal: 159.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Gaming Headset", basePrice: 89.99, baseOriginal: 149.99, imageId: "1505740420928-5e560c06d30e" },
    { baseName: "External SSD", basePrice: 99.99, baseOriginal: 179.99, imageId: "1625842268584-8f3296236761" },
    { baseName: "Smart Home Hub", basePrice: 129.99, baseOriginal: 199.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Monitor 27\"", basePrice: 199.99, baseOriginal: 349.99, imageId: "1527864550417-7fd91fc51a46" },
    { baseName: "Laptop Sleeve", basePrice: 29.99, baseOriginal: 49.99, imageId: "1527864550417-7fd91fc51a46" },
    { baseName: "Phone Case", basePrice: 14.99, baseOriginal: 29.99, imageId: "1544244015-0df4b3ffc6b0" },
    { baseName: "Power Bank", basePrice: 34.99, baseOriginal: 59.99, imageId: "1609091839311-d5365f9ff1c8" },
    { baseName: "Cable Organizer", basePrice: 12.99, baseOriginal: 24.99, imageId: "1625842268584-8f3296236761" },
  ],
  Clothing: [
    { baseName: "Cotton T-Shirt", basePrice: 24.99, baseOriginal: 49.99, imageId: "1521572163474-6864f9cf17ab" },
    { baseName: "Denim Jeans", basePrice: 49.99, baseOriginal: 89.99, imageId: "1542272604-787c3835535d" },
    { baseName: "Hooded Sweatshirt", basePrice: 39.99, baseOriginal: 69.99, imageId: "1556821840-3a63f95609a7" },
    { baseName: "Running Shorts", basePrice: 29.99, baseOriginal: 54.99, imageId: "1591047139829-d91aecb6caea" },
    { baseName: "Leather Jacket", basePrice: 149.99, baseOriginal: 299.99, imageId: "1551028719-00167b16eac5" },
    { baseName: "Winter Coat", basePrice: 129.99, baseOriginal: 249.99, imageId: "1539533018447-63fcce2678e3" },
    { baseName: "Polo Shirt", basePrice: 34.99, baseOriginal: 59.99, imageId: "1521572163474-6864f9cf17ab" },
    { baseName: "Yoga Pants", basePrice: 39.99, baseOriginal: 69.99, imageId: "1591047139829-d91aecb6caea" },
    { baseName: "Dress Shirt", basePrice: 44.99, baseOriginal: 79.99, imageId: "1521572163474-6864f9cf17ab" },
    { baseName: "Baseball Cap", basePrice: 19.99, baseOriginal: 34.99, imageId: "1588850561407-ed78c282e89b" },
    { baseName: "Sneakers", basePrice: 59.99, baseOriginal: 99.99, imageId: "1542291026-7eec264c27ff" },
    { baseName: "Windbreaker", basePrice: 49.99, baseOriginal: 89.99, imageId: "1551028719-00167b16eac5" },
    { baseName: "Tank Top", basePrice: 19.99, baseOriginal: 34.99, imageId: "1521572163474-6864f9cf17ab" },
    { baseName: "Cargo Pants", basePrice: 54.99, baseOriginal: 99.99, imageId: "1542272604-787c3835535d" },
    { baseName: "Cardigan", basePrice: 44.99, baseOriginal: 79.99, imageId: "1556821840-3a63f95609a7" },
  ],
  "Home & Kitchen": [
    { baseName: "Cookware Set", basePrice: 89.99, baseOriginal: 179.99, imageId: "1556911220-bff31c812dba" },
    { baseName: "LED Desk Lamp", basePrice: 29.99, baseOriginal: 59.99, imageId: "1507473885765-e6ed057f782c" },
    { baseName: "Coffee Maker", basePrice: 59.99, baseOriginal: 119.99, imageId: "1517668808823-bfdb8d0c35f0" },
    { baseName: "Air Fryer", basePrice: 79.99, baseOriginal: 149.99, imageId: "1615873968403-89e068629265" },
    { baseName: "Bedding Set", basePrice: 69.99, baseOriginal: 139.99, imageId: "1586105251261-72a756497a11" },
    { baseName: "Robot Vacuum", basePrice: 199.99, baseOriginal: 399.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Stand Mixer", basePrice: 249.99, baseOriginal: 449.99, imageId: "1556910103-1c02745aae4d" },
    { baseName: "Smart Thermostat", basePrice: 129.99, baseOriginal: 249.99, imageId: "1558618047-3c8c76ca7d13" },
    { baseName: "Kitchen Knife Set", basePrice: 79.99, baseOriginal: 149.99, imageId: "1556911220-bff31c812dba" },
    { baseName: "Bath Towel Set", basePrice: 49.99, baseOriginal: 99.99, imageId: "1586105251261-72a756497a11" },
    { baseName: "Dining Table Set", basePrice: 449.99, baseOriginal: 899.99, imageId: "1586023492125-27b2c045efd7" },
    { baseName: "Storage Baskets", basePrice: 34.99, baseOriginal: 59.99, imageId: "1586023492125-27b2c045efd7" },
    { baseName: "Throw Pillows", basePrice: 24.99, baseOriginal: 49.99, imageId: "1586105251261-72a756497a11" },
    { baseName: "Wall Clock", basePrice: 39.99, baseOriginal: 69.99, imageId: "1507473885765-e6ed057f782c" },
    { baseName: "Candle Set", basePrice: 19.99, baseOriginal: 39.99, imageId: "1586023492125-27b2c045efd7" },
  ],
  "Toys & Games": [
    { baseName: "Action Figure Set", basePrice: 39.99, baseOriginal: 79.99, imageId: "1559827260-dc66d52bef19" },
    { baseName: "Board Game Collection", basePrice: 49.99, baseOriginal: 99.99, imageId: "1606166188517-c0ec07e0e143" },
    { baseName: "LEGO Building Set", basePrice: 59.99, baseOriginal: 119.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Remote Control Drone", basePrice: 89.99, baseOriginal: 179.99, imageId: "1473968512647-3e447244af8f" },
    { baseName: "Puzzle Set", basePrice: 19.99, baseOriginal: 39.99, imageId: "1606166188517-c0ec07e0e143" },
    { baseName: "RC Car", basePrice: 69.99, baseOriginal: 139.99, imageId: "1473968512647-3e447244af8f" },
    { baseName: "Building Blocks", basePrice: 34.99, baseOriginal: 69.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Card Game Collection", basePrice: 24.99, baseOriginal: 49.99, imageId: "1606166188517-c0ec07e0e143" },
    { baseName: "Doll Set", basePrice: 29.99, baseOriginal: 59.99, imageId: "1559827260-dc66d52bef19" },
    { baseName: "Science Kit", basePrice: 44.99, baseOriginal: 89.99, imageId: "1558618666-fcd25c85cd64" },
  ],
  "Beauty & Health": [
    { baseName: "Skincare Routine Set", basePrice: 49.99, baseOriginal: 99.99, imageId: "1556229010-6c3f2c9ca5f8" },
    { baseName: "Electric Toothbrush", basePrice: 39.99, baseOriginal: 79.99, imageId: "1607613009820-a29f7bb81c04" },
    { baseName: "Hair Dryer", basePrice: 59.99, baseOriginal: 119.99, imageId: "1522338242992-e1a54906a8da" },
    { baseName: "Fitness Tracker", basePrice: 79.99, baseOriginal: 149.99, imageId: "1579586337278-3befd40fd17a" },
    { baseName: "Makeup Brush Set", basePrice: 29.99, baseOriginal: 59.99, imageId: "1556229010-6c3f2c9ca5f8" },
    { baseName: "Face Mask Set", basePrice: 19.99, baseOriginal: 39.99, imageId: "1556229010-6c3f2c9ca5f8" },
    { baseName: "Massage Gun", basePrice: 99.99, baseOriginal: 199.99, imageId: "1607613009820-a29f7bb81c04" },
    { baseName: "Essential Oil Diffuser", basePrice: 34.99, baseOriginal: 69.99, imageId: "1607613009820-a29f7bb81c04" },
    { baseName: "Shower Head Filter", basePrice: 39.99, baseOriginal: 79.99, imageId: "1607613009820-a29f7bb81c04" },
    { baseName: "Weighted Blanket", basePrice: 69.99, baseOriginal: 139.99, imageId: "1586105251261-72a756497a11" },
    { baseName: "Yoga Mat", basePrice: 34.99, baseOriginal: 69.99, imageId: "1601925260368-ae2f83cf8b7f" },
    { baseName: "Resistance Bands", basePrice: 24.99, baseOriginal: 49.99, imageId: "1571019613454-1cb2f99b2d8b" },
  ],
  "Sports & Outdoors": [
    { baseName: "Running Shoes", basePrice: 69.99, baseOriginal: 139.99, imageId: "1542291026-7eec264c27ff" },
    { baseName: "Dumbbell Set", basePrice: 149.99, baseOriginal: 299.99, imageId: "1571019613454-1cb2f99b2d8b" },
    { baseName: "Camping Tent", basePrice: 89.99, baseOriginal: 179.99, imageId: "1478131143081-80f7f84ca84d" },
    { baseName: "Bicycle Helmet", basePrice: 49.99, baseOriginal: 99.99, imageId: "1558618666-fcd25c85cd64" },
    { baseName: "Hiking Backpack", basePrice: 79.99, baseOriginal: 159.99, imageId: "1478131143081-80f7f84ca84d" },
    { baseName: "Jump Rope", basePrice: 14.99, baseOriginal: 29.99, imageId: "1571019613454-1cb2f99b2d8b" },
    { baseName: "Water Bottle", basePrice: 29.99, baseOriginal: 59.99, imageId: "1602143407151-7111542de6e8" },
    { baseName: "Exercise Mat", basePrice: 39.99, baseOriginal: 79.99, imageId: "1601925260368-ae2f83cf8b7f" },
    { baseName: "Tennis Racket", basePrice: 89.99, baseOriginal: 179.99, imageId: "1542291026-7eec264c27ff" },
    { baseName: "Basketball", basePrice: 24.99, baseOriginal: 49.99, imageId: "1542291026-7eec264c27ff" },
  ],
  "Jewelry & Accessories": [
    { baseName: "Silver Necklace", basePrice: 59.99, baseOriginal: 119.99, imageId: "1515562141207-7a88fb7ce338" },
    { baseName: "Leather Watch", basePrice: 129.99, baseOriginal: 259.99, imageId: "1523275335684-37898b6baf30" },
    { baseName: "Sunglasses", basePrice: 39.99, baseOriginal: 79.99, imageId: "1572635196237-14b3f281503f" },
    { baseName: "Leather Wallet", basePrice: 34.99, baseOriginal: 69.99, imageId: "1627123424574-724758594e93" },
    { baseName: "Gold Earrings", basePrice: 24.99, baseOriginal: 49.99, imageId: "1515562141207-7a88fb7ce338" },
    { baseName: "Leather Belt", basePrice: 29.99, baseOriginal: 59.99, imageId: "1627123424574-724758594e93" },
    { baseName: "Bracelet Set", basePrice: 19.99, baseOriginal: 39.99, imageId: "1515562141207-7a88fb7ce338" },
    { baseName: "Ring Set", basePrice: 34.99, baseOriginal: 69.99, imageId: "1515562141207-7a88fb7ce338" },
  ],
  Books: [
    { baseName: "Novel Collection", basePrice: 49.99, baseOriginal: 99.99, imageId: "1544947950-fa07a98d237f" },
    { baseName: "Cookbook", basePrice: 29.99, baseOriginal: 59.99, imageId: "1507003211169-0a1dd7228f2d" },
    { baseName: "Self-Help Collection", basePrice: 39.99, baseOriginal: 79.99, imageId: "1481627834876-b7833e8f5570" },
    { baseName: "Children's Book Set", basePrice: 34.99, baseOriginal: 69.99, imageId: "1544947950-fa07a98d237f" },
    { baseName: "Mystery Novel", basePrice: 14.99, baseOriginal: 29.99, imageId: "1544947950-fa07a98d237f" },
    { baseName: "Biography", basePrice: 19.99, baseOriginal: 39.99, imageId: "1544947950-fa07a98d237f" },
  ],
  Automotive: [
    { baseName: "Car Phone Mount", basePrice: 19.99, baseOriginal: 39.99, imageId: "1605559424843-9e4c228bf1c2" },
    { baseName: "Car Charger", basePrice: 14.99, baseOriginal: 29.99, imageId: "1605559424843-9e4c228bf1c2" },
    { baseName: "Dash Cam", basePrice: 69.99, baseOriginal: 139.99, imageId: "1605559424843-9e4c228bf1c2" },
    { baseName: "Car Floor Mats", basePrice: 49.99, baseOriginal: 99.99, imageId: "1605559424843-9e4c228bf1c2" },
    { baseName: "Car Air Freshener", basePrice: 12.99, baseOriginal: 24.99, imageId: "1605559424843-9e4c228bf1c2" },
    { baseName: "Tire Pressure Gauge", basePrice: 9.99, baseOriginal: 19.99, imageId: "1605559424843-9e4c228bf1c2" },
  ],
};

const variations = ["Pro", "Premium", "Deluxe", "Ultra", "Elite", "Classic", "Standard", "Plus", "Max", "Mini"];

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  Object.entries(productTemplates).forEach(([category, templates]) => {
    templates.forEach((template, templateIndex) => {
      // Generate 3-5 variations of each template
      const numVariations = 3 + Math.floor(Math.random() * 3);
      
      for (let i = 0; i < numVariations; i++) {
        const variation = variations[Math.floor(Math.random() * variations.length)];
        const name = i === 0 ? template.baseName : `${template.baseName} ${variation}`;
        
        // Vary prices slightly
        const priceVariation = 0.8 + Math.random() * 0.4; // 80% to 120% of base
        const price = Math.round(template.basePrice * priceVariation * 100) / 100;
        const originalPrice = Math.round(template.baseOriginal * priceVariation * 100) / 100;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        // Random attributes
        const rating = 3.5 + Math.random() * 1.5; // 3.5 to 5.0
        const reviewCount = Math.floor(100 + Math.random() * 50000);
        const sold = Math.floor(1000 + Math.random() * 100000);
        const inStock = Math.random() > 0.1; // 90% in stock
        const isOnSale = Math.random() > 0.3; // 70% on sale
        const isNew = Math.random() > 0.8; // 20% new
        const hasBadge = Math.random() > 0.5;
        
        let badge: string | undefined;
        if (hasBadge) {
          if (isNew) badge = "New";
          else if (discount > 40) badge = `-${discount}%`;
          else if (Math.random() > 0.7) badge = "Hot";
        }

        // Generate 2 images
        const image1 = `https://images.unsplash.com/photo-${template.imageId}?w=800&h=800&fit=crop`;
        const image2 = `https://images.unsplash.com/photo-${template.imageId}?w=800&h=800&fit=crop&q=80`;

        products.push(createProduct({
          id: id.toString(),
          name,
          description: `High-quality ${name.toLowerCase()} with premium features and excellent value. Perfect for everyday use.`,
          price,
          originalPrice,
          discount,
          images: [image1, image2],
          category,
          rating: Math.round(rating * 10) / 10,
          reviewCount,
          sold,
          inStock,
          isOnSale,
          isNew,
          badge,
        }));

        id++;
      }
    });
  });

  return products;
}

export const products = generateProducts();

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




