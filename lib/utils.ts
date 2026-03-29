export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getRatingStars = (rate: number): { full: number; half: boolean; empty: number } => {
  const full = Math.floor(rate);
  const half = rate % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
};

export const debounce = <T extends (...args: unknown[]) => unknown>(func: T, delay: number): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
};