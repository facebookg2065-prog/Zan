import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div 
      className={`animate-pulse bg-stone-200 rounded-xl ${className}`}
      aria-hidden="true"
    />
  );
};

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full">
      <Skeleton className="h-72 w-full rounded-none" />
      <div className="p-10 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="pt-4">
          <Skeleton className="h-14 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
