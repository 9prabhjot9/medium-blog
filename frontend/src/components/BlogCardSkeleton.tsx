import { Skeleton } from "@/components/ui/skeleton"

export const BlogCardSkeleton = () => {
  return (
    <div className="border-b pb-4">
      <div className="flex items-center gap-2 mb-2">
        <Skeleton className="h-6 w-40 rounded-full" />
        <Skeleton className="h-4 w-50" />
        <Skeleton className="h-4 w-50" />
      </div>
      <Skeleton className="h-6 w-2/3 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-1" />
      <Skeleton className="h-3 w-20" />
    </div>
  )
}