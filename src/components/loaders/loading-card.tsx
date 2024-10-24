import { Skeleton } from "../ui/skeleton";

function LoadingCards() {
  return (
    <div className="grid gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md bg-white" />
      <Skeleton className="w-3/4 h-4 mt-2 bg-white" />
      <Skeleton className="w-1/2 h-4 mt-2 bg-white" />
    </div>
  );
}

export default LoadingCards;
