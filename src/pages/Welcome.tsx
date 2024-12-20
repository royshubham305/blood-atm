import { useNavigate } from 'react-router-dom';
import { Droplet } from 'lucide-react';
import Button from '../components/Button';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
        {/* Hero Section */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <Droplet className="w-10 h-10 md:w-12 md:h-12 text-red-600" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
              Welcome to Blood ATM
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-red-600 font-medium italic px-4">
            "Be someone's lifeline: donate blood"
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 md:my-12 px-4">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80"
            alt="Blood Donation"
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
            alt="Medical Care"
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover hidden md:block"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
            alt="Healthcare"
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover hidden md:block"
            loading="lazy"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">14.6M</div>
            <div className="text-sm md:text-base text-gray-600">Indian need blood yearly</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">38,000</div>
            <div className="text-sm md:text-base text-gray-600">Pints of donated blood used daily</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">3</div>
            <div className="text-sm md:text-base text-gray-600">Lives saved by one donation</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/home')}
            className="text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 transform hover:scale-105 transition-transform duration-200 w-64 mx-auto"
          >
            Get Started
          </Button>
          
          <button
            onClick={() => navigate('/admin')}
            className="block mx-auto text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            Admin Login
          </button>
        </div>

        {/* Footer Message */}
        <p className="text-sm md:text-base text-gray-600 mt-6 md:mt-8 px-4">
          Every donation counts. Join us in saving lives today.
        </p>
      </div>
    </div>
  );
}