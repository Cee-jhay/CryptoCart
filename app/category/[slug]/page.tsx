import { Suspense } from "react";
import { Metadata } from "next";
import { products, categories } from "@/data/products";
import { slugToCategory } from "@/lib/category-utils";
import CategoryHero from "@/components/CategoryHero";
import CategoryPageClient from "@/components/CategoryPageClient";
import FloatingCartButton from "@/components/FloatingCartButton";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slugToCategory(slug);
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return {
    title: `${categoryName} | CryptoCart - Shop Smarter With Crypto`,
    description: `Browse our collection of ${categoryProducts.length} ${categoryName.toLowerCase()} products. Shop with cryptocurrency and enjoy fast, secure checkout.`,
    openGraph: {
      title: `${categoryName} | CryptoCart`,
      description: `Browse our collection of ${categoryProducts.length} ${categoryName.toLowerCase()} products.`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const searchParamsResolved = await searchParams;
  const categoryName = slugToCategory(slug);

  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Verify category exists and has products
  if ((!categories.includes(categoryName) && categoryName !== "All") || categoryProducts.length === 0) {
    notFound();
  }

  // Get max price for filters
  const maxPrice = Math.max(...categoryProducts.map((p) => p.price), 1000);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0b] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#d1d1d1] mb-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[#00c853] transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/products" className="hover:text-[#00c853] transition-colors">
            Products
          </a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{categoryName}</span>
        </nav>

        {/* Hero Section */}
        <Suspense fallback={<div className="h-64 md:h-80 lg:h-96 rounded-2xl bg-white/5 mb-8 animate-pulse" />}>
          <CategoryHero
            categoryName={categoryName}
            productCount={categoryProducts.length}
          />
        </Suspense>

        {/* Main Content */}
        <Suspense fallback={<div className="h-96 bg-white/5 rounded-xl animate-pulse" />}>
          <CategoryPageClient
            initialProducts={categoryProducts}
            categoryName={categoryName}
            maxPrice={maxPrice}
            searchParams={searchParamsResolved}
          />
        </Suspense>
      </div>
      <FloatingCartButton />
    </div>
  );
}
