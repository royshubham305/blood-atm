import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      {children}
    </div>
  );
}