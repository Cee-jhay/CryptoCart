// Utility functions for category slug conversion

export const categorySlugMap: Record<string, string> = {
  "electronics": "Electronics",
  "clothing": "Clothing",
  "home-kitchen": "Home & Kitchen",
  "toys-games": "Toys & Games",
  "beauty-health": "Beauty & Health",
  "sports-outdoors": "Sports & Outdoors",
  "jewelry-accessories": "Jewelry & Accessories",
  "books": "Books",
  "automotive": "Automotive",
};

/**
 * Convert a category name to a URL-friendly slug
 */
export function categoryToSlug(categoryName: string): string {
  // Find the slug for this category name
  const entry = Object.entries(categorySlugMap).find(
    ([_, name]) => name.toLowerCase() === categoryName.toLowerCase()
  );
  
  if (entry) {
    return entry[0];
  }
  
  // Fallback: convert category name to slug
  return categoryName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace("&", "")
    .replace(/\//g, "-");
}

/**
 * Convert a URL slug to a category name
 */
export function slugToCategory(slug: string): string {
  const lowerSlug = slug.toLowerCase();
  
  // First try exact match
  if (categorySlugMap[lowerSlug]) {
    return categorySlugMap[lowerSlug];
  }
  
  // Try with different separators
  const normalizedSlug = lowerSlug.replace(/[_\s]/g, "-");
  if (categorySlugMap[normalizedSlug]) {
    return categorySlugMap[normalizedSlug];
  }
  
  // Fallback: convert slug to category name format
  const categoryName = slug
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  
  // Handle special cases
  if (categoryName.includes("Home") && categoryName.includes("Kitchen")) {
    return "Home & Kitchen";
  }
  if (categoryName.includes("Toys") && categoryName.includes("Games")) {
    return "Toys & Games";
  }
  if (categoryName.includes("Beauty") && categoryName.includes("Health")) {
    return "Beauty & Health";
  }
  if (categoryName.includes("Sports") && categoryName.includes("Outdoors")) {
    return "Sports & Outdoors";
  }
  if (categoryName.includes("Jewelry") && categoryName.includes("Accessories")) {
    return "Jewelry & Accessories";
  }
  
  return categoryName;
}




