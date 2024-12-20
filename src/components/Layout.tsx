import { ReactNode } from 'react';
import { Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <header className="flex items-center justify-between mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 md:gap-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-2"
          >
            <Droplet className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Blood ATM</h1>
          </button>
        </header>
        <main>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6 md:mb-8">{title}</h2>
          {children}
        </main>
      </div>
    </div>
  );
}