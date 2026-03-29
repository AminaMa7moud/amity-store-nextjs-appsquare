import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = ({ children, className = '', hover = true, gradient = false }: CardProps) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-500
        ${gradient 
          ? 'bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/50 dark:to-gray-900/50 border border-white/20' 
          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
        }
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:shadow-purple-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};