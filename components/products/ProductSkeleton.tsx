import { Skeleton } from '@/components/ui/Skeleton';
import { Card } from '@/components/ui/Card';

export const ProductSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-64 w-full rounded-t-2xl" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-1">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16 rounded-xl" />
        </div>
      </div>
    </Card>
  );
};