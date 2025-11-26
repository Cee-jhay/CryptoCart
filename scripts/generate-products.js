// Script to generate 300+ products
const fs = require('fs');

const categories = [
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

const productTemplates = {
  Electronics: [
    { name: "Wireless Bluetooth Earbuds", price: 79.99, original: 149.99, img: "1590658268037-6bf12165a8df" },
    { name: "Smart Watch", price: 249.99, original: 399.99, img: "1523275335684-37898b6baf30" },
    { name: "Wireless Mouse", price: 24.99, original: 49.99, img: "1527814050087-3793815479db" },
    { name: "4K Smart TV", price: 449.99, original: 799.99, img: "1593359677879-a4bb92f829d1" },
    { name: "Laptop Stand", price: 34.99, original: 59.99, img: "1527864550417-7fd91fc51a46" },
    { name: "Mechanical Keyboard", price: 89.99, original: 149.99, img: "1587829741301-dc798b83add3" },
    { name: "USB-C Hub", price: 39.99, original: 69.99, img: "1625842268584-8f3296236761" },
    { name: "Wireless Charging Pad", price: 19.99, original: 39.99, img: "1609091839311-d5365f9ff1c8" },
    { name: "Bluetooth Speaker", price: 59.99, original: 99.99, img: "1608043152269-423dbba4e7e1" },
    { name: "Webcam HD", price: 49.99, original: 89.99, img: "1587825147138-346c006b3f49" },
    { name: "Tablet", price: 149.99, original: 299.99, img: "1544244015-0df4b3ffc6b0" },
    { name: "Security Camera", price: 79.99, original: 159.99, img: "1558618666-fcd25c85cd64" },
    { name: "Gaming Headset", price: 89.99, original: 149.99, img: "1505740420928-5e560c06d30e" },
    { name: "External SSD", price: 99.99, original: 179.99, img: "1625842268584-8f3296236761" },
    { name: "Smart Home Hub", price: 129.99, original: 199.99, img: "1558618666-fcd25c85cd64" },
    { name: "Monitor 27\"", price: 199.99, original: 349.99, img: "1527864550417-7fd91fc51a46" },
    { name: "Laptop Sleeve", price: 29.99, original: 49.99, img: "1527864550417-7fd91fc51a46" },
    { name: "Phone Case", price: 14.99, original: 29.99, img: "1544244015-0df4b3ffc6b0" },
    { name: "Power Bank", price: 34.99, original: 59.99, img: "1609091839311-d5365f9ff1c8" },
    { name: "Cable Organizer", price: 12.99, original: 24.99, img: "1625842268584-8f3296236761" },
  ],
  Clothing: [
    { name: "Cotton T-Shirt", price: 24.99, original: 49.99, img: "1521572163474-6864f9cf17ab" },
    { name: "Denim Jeans", price: 49.99, original: 89.99, img: "1542272604-787c3835535d" },
    { name: "Hooded Sweatshirt", price: 39.99, original: 69.99, img: "1556821840-3a63f95609a7" },
    { name: "Running Shorts", price: 29.99, original: 54.99, img: "1591047139829-d91aecb6caea" },
    { name: "Leather Jacket", price: 149.99, original: 299.99, img: "1551028719-00167b16eac5" },
    { name: "Winter Coat", price: 129.99, original: 249.99, img: "1539533018447-63fcce2678e3" },
    { name: "Polo Shirt", price: 34.99, original: 59.99, img: "1521572163474-6864f9cf17ab" },
    { name: "Yoga Pants", price: 39.99, original: 69.99, img: "1591047139829-d91aecb6caea" },
    { name: "Dress Shirt", price: 44.99, original: 79.99, img: "1521572163474-6864f9cf17ab" },
    { name: "Baseball Cap", price: 19.99, original: 34.99, img: "1588850561407-ed78c282e89b" },
    { name: "Sneakers", price: 59.99, original: 99.99, img: "1542291026-7eec264c27ff" },
    { name: "Windbreaker", price: 49.99, original: 89.99, img: "1551028719-00167b16eac5" },
    { name: "Tank Top", price: 19.99, original: 34.99, img: "1521572163474-6864f9cf17ab" },
    { name: "Cargo Pants", price: 54.99, original: 99.99, img: "1542272604-787c3835535d" },
    { name: "Cardigan", price: 44.99, original: 79.99, img: "1556821840-3a63f95609a7" },
  ],
  "Home & Kitchen": [
    { name: "Cookware Set", price: 89.99, original: 179.99, img: "1556911220-bff31c812dba" },
    { name: "LED Desk Lamp", price: 29.99, original: 59.99, img: "1507473885765-e6ed057f782c" },
    { name: "Coffee Maker", price: 59.99, original: 119.99, img: "1517668808823-bfdb8d0c35f0" },
    { name: "Air Fryer", price: 79.99, original: 149.99, img: "1615873968403-89e068629265" },
    { name: "Bedding Set", price: 69.99, original: 139.99, img: "1586105251261-72a756497a11" },
    { name: "Robot Vacuum", price: 199.99, original: 399.99, img: "1558618666-fcd25c85cd64" },
    { name: "Stand Mixer", price: 249.99, original: 449.99, img: "1556910103-1c02745aae4d" },
    { name: "Smart Thermostat", price: 129.99, original: 249.99, img: "1558618047-3c8c76ca7d13" },
    { name: "Kitchen Knife Set", price: 79.99, original: 149.99, img: "1556911220-bff31c812dba" },
    { name: "Bath Towel Set", price: 49.99, original: 99.99, img: "1586105251261-72a756497a11" },
    { name: "Dining Table Set", price: 449.99, original: 899.99, img: "1586023492125-27b2c045efd7" },
    { name: "Storage Baskets", price: 34.99, original: 59.99, img: "1586023492125-27b2c045efd7" },
    { name: "Throw Pillows", price: 24.99, original: 49.99, img: "1586105251261-72a756497a11" },
    { name: "Wall Clock", price: 39.99, original: 69.99, img: "1507473885765-e6ed057f782c" },
    { name: "Candle Set", price: 19.99, original: 39.99, img: "1586023492125-27b2c045efd7" },
  ],
  "Toys & Games": [
    { name: "Action Figure Set", price: 39.99, original: 79.99, img: "1559827260-dc66d52bef19" },
    { name: "Board Game Collection", price: 49.99, original: 99.99, img: "1606166188517-c0ec07e0e143" },
    { name: "LEGO Building Set", price: 59.99, original: 119.99, img: "1558618666-fcd25c85cd64" },
    { name: "Remote Control Drone", price: 89.99, original: 179.99, img: "1473968512647-3e447244af8f" },
    { name: "Puzzle Set", price: 19.99, original: 39.99, img: "1606166188517-c0ec07e0e143" },
    { name: "RC Car", price: 69.99, original: 139.99, img: "1473968512647-3e447244af8f" },
    { name: "Building Blocks", price: 34.99, original: 69.99, img: "1558618666-fcd25c85cd64" },
    { name: "Card Game Collection", price: 24.99, original: 49.99, img: "1606166188517-c0ec07e0e143" },
    { name: "Doll Set", price: 29.99, original: 59.99, img: "1559827260-dc66d52bef19" },
    { name: "Science Kit", price: 44.99, original: 89.99, img: "1558618666-fcd25c85cd64" },
  ],
  "Beauty & Health": [
    { name: "Skincare Routine Set", price: 49.99, original: 99.99, img: "1556229010-6c3f2c9ca5f8" },
    { name: "Electric Toothbrush", price: 39.99, original: 79.99, img: "1607613009820-a29f7bb81c04" },
    { name: "Hair Dryer", price: 59.99, original: 119.99, img: "1522338242992-e1a54906a8da" },
    { name: "Fitness Tracker", price: 79.99, original: 149.99, img: "1579586337278-3befd40fd17a" },
    { name: "Makeup Brush Set", price: 29.99, original: 59.99, img: "1556229010-6c3f2c9ca5f8" },
    { name: "Face Mask Set", price: 19.99, original: 39.99, img: "1556229010-6c3f2c9ca5f8" },
    { name: "Massage Gun", price: 99.99, original: 199.99, img: "1607613009820-a29f7bb81c04" },
    { name: "Essential Oil Diffuser", price: 34.99, original: 69.99, img: "1607613009820-a29f7bb81c04" },
    { name: "Shower Head Filter", price: 39.99, original: 79.99, img: "1607613009820-a29f7bb81c04" },
    { name: "Weighted Blanket", price: 69.99, original: 139.99, img: "1586105251261-72a756497a11" },
    { name: "Yoga Mat", price: 34.99, original: 69.99, img: "1601925260368-ae2f83cf8b7f" },
    { name: "Resistance Bands", price: 24.99, original: 49.99, img: "1571019613454-1cb2f99b2d8b" },
  ],
  "Sports & Outdoors": [
    { name: "Running Shoes", price: 69.99, original: 139.99, img: "1542291026-7eec264c27ff" },
    { name: "Dumbbell Set", price: 149.99, original: 299.99, img: "1571019613454-1cb2f99b2d8b" },
    { name: "Camping Tent", price: 89.99, original: 179.99, img: "1478131143081-80f7f84ca84d" },
    { name: "Bicycle Helmet", price: 49.99, original: 99.99, img: "1558618666-fcd25c85cd64" },
    { name: "Hiking Backpack", price: 79.99, original: 159.99, img: "1478131143081-80f7f84ca84d" },
    { name: "Jump Rope", price: 14.99, original: 29.99, img: "1571019613454-1cb2f99b2d8b" },
    { name: "Water Bottle", price: 29.99, original: 59.99, img: "1602143407151-7111542de6e8" },
    { name: "Exercise Mat", price: 39.99, original: 79.99, img: "1601925260368-ae2f83cf8b7f" },
    { name: "Tennis Racket", price: 89.99, original: 179.99, img: "1542291026-7eec264c27ff" },
    { name: "Basketball", price: 24.99, original: 49.99, img: "1542291026-7eec264c27ff" },
  ],
  "Jewelry & Accessories": [
    { name: "Silver Necklace", price: 59.99, original: 119.99, img: "1515562141207-7a88fb7ce338" },
    { name: "Leather Watch", price: 129.99, original: 259.99, img: "1523275335684-37898b6baf30" },
    { name: "Sunglasses", price: 39.99, original: 79.99, img: "1572635196237-14b3f281503f" },
    { name: "Leather Wallet", price: 34.99, original: 69.99, img: "1627123424574-724758594e93" },
    { name: "Gold Earrings", price: 24.99, original: 49.99, img: "1515562141207-7a88fb7ce338" },
    { name: "Leather Belt", price: 29.99, original: 59.99, img: "1627123424574-724758594e93" },
    { name: "Bracelet Set", price: 19.99, original: 39.99, img: "1515562141207-7a88fb7ce338" },
    { name: "Ring Set", price: 34.99, original: 69.99, img: "1515562141207-7a88fb7ce338" },
  ],
  Books: [
    { name: "Novel Collection", price: 49.99, original: 99.99, img: "1544947950-fa07a98d237f" },
    { name: "Cookbook", price: 29.99, original: 59.99, img: "1507003211169-0a1dd7228f2d" },
    { name: "Self-Help Collection", price: 39.99, original: 79.99, img: "1481627834876-b7833e8f5570" },
    { name: "Children's Book Set", price: 34.99, original: 69.99, img: "1544947950-fa07a98d237f" },
    { name: "Mystery Novel", price: 14.99, original: 29.99, img: "1544947950-fa07a98d237f" },
    { name: "Biography", price: 19.99, original: 39.99, img: "1544947950-fa07a98d237f" },
  ],
  Automotive: [
    { name: "Car Phone Mount", price: 19.99, original: 39.99, img: "1605559424843-9e4c228bf1c2" },
    { name: "Car Charger", price: 14.99, original: 29.99, img: "1605559424843-9e4c228bf1c2" },
    { name: "Dash Cam", price: 69.99, original: 139.99, img: "1605559424843-9e4c228bf1c2" },
    { name: "Car Floor Mats", price: 49.99, original: 99.99, img: "1605559424843-9e4c228bf1c2" },
    { name: "Car Air Freshener", price: 12.99, original: 24.99, img: "1605559424843-9e4c228bf1c2" },
    { name: "Tire Pressure Gauge", price: 9.99, original: 19.99, img: "1605559424843-9e4c228bf1c2" },
  ],
};

const variations = ["Pro", "Premium", "Deluxe", "Ultra", "Elite", "Classic", "Standard", "Plus", "Max", "Mini", "Lite", "Advanced"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generateProducts() {
  let id = 1;
  const products = [];

  Object.entries(productTemplates).forEach(([category, templates]) => {
    templates.forEach((template, templateIndex) => {
      // Generate 4-6 variations of each template to reach 300+ products
      const numVariations = 4 + Math.floor(Math.random() * 3);
      
      for (let i = 0; i < numVariations; i++) {
        const variation = i === 0 ? "" : ` ${variations[Math.floor(Math.random() * variations.length)]}`;
        const name = template.name + variation;
        
        // Vary prices slightly
        const priceVariation = 0.85 + Math.random() * 0.3; // 85% to 115% of base
        const price = Math.round(template.price * priceVariation * 100) / 100;
        const originalPrice = Math.round(template.original * priceVariation * 100) / 100;
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        // Random attributes
        const rating = 3.8 + Math.random() * 1.2; // 3.8 to 5.0
        const reviewCount = Math.floor(500 + Math.random() * 50000);
        const sold = Math.floor(2000 + Math.random() * 100000);
        const inStock = Math.random() > 0.08; // 92% in stock
        const isOnSale = Math.random() > 0.25; // 75% on sale
        const isNew = Math.random() > 0.85; // 15% new
        const hasBadge = Math.random() > 0.4;
        
        let badge;
        if (hasBadge) {
          if (isNew) badge = "New";
          else if (discount > 45) badge = `-${discount}%`;
          else if (Math.random() > 0.6) badge = "Hot";
        }

        const image1 = `https://images.unsplash.com/photo-${template.img}?w=800&h=800&fit=crop`;
        const image2 = `https://images.unsplash.com/photo-${template.img}?w=800&h=800&fit=crop&q=80`;

        products.push({
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
        });

        id++;
      }
    });
  });

  return products;
}

const products = generateProducts();
console.log(`Generated ${products.length} products`);

// Generate TypeScript file
let output = `import { Product } from "@/types/product";

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
`;

products.forEach((p, idx) => {
  output += `  createProduct({\n`;
  output += `    id: "${p.id}",\n`;
  output += `    name: ${JSON.stringify(p.name)},\n`;
  output += `    description: ${JSON.stringify(p.description)},\n`;
  output += `    price: ${p.price},\n`;
  output += `    originalPrice: ${p.originalPrice},\n`;
  output += `    discount: ${p.discount},\n`;
  output += `    images: [${p.images.map(img => JSON.stringify(img)).join(', ')}],\n`;
  output += `    category: ${JSON.stringify(p.category)},\n`;
  output += `    rating: ${p.rating},\n`;
  output += `    reviewCount: ${p.reviewCount},\n`;
  output += `    sold: ${p.sold},\n`;
  output += `    inStock: ${p.inStock},\n`;
  output += `    isOnSale: ${p.isOnSale},\n`;
  if (p.isNew) output += `    isNew: true,\n`;
  if (p.badge) output += `    badge: ${JSON.stringify(p.badge)},\n`;
  output += `  })${idx < products.length - 1 ? ',' : ''}\n`;
});

output += `];

export const categories = [
  "All",
${categories.map(c => `  "${c}",`).join('\n')}
];
`;

fs.writeFileSync('data/products.ts', output);
console.log('Products file generated successfully!');




