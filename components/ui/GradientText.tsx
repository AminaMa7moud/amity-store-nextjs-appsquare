import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({
  children,
  from = 'from-purple-600',
  to = 'to-pink-600',
  className = '',
  animate = true,
}: GradientTextProps) => {
  return (
    <span
      className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${
        animate ? 'animate-gradient' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
};