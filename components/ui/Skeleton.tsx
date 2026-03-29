interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
  const base = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]';
  
  const variants = {
    text: 'rounded-lg h-4 w-full',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  return <div className={`${base} ${variants[variant]} ${className}`} />;
};