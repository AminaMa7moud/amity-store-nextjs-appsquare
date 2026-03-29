import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-left': '-translate-x-10 opacity-0',
    'fade-right': 'translate-x-10 opacity-0',
    'zoom': 'scale-95 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : animations[animation]
      }`}
    >
      {children}
    </div>
  );
};