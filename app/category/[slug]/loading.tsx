import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Skeleton */}
        <Skeleton className="h-64 md:h-80 lg:h-96 rounded-2xl mb-8" />

        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Filters and Products Skeleton */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Skeleton */}
          <div className="hidden lg:block">
            <Skeleton className="h-96 rounded-xl" />
          </div>

          {/* Products Grid Skeleton */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




