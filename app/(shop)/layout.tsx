import { ReactNode } from 'react';

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <div className="pt-16 md:pt-20">{children}</div>;
}