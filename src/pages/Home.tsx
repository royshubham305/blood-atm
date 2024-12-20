import { Heart, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout title="How would you like to help?">
      <div className="max-w-2xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
          Choose an option below to either request blood or become a donor
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <button 
            onClick={() => navigate('/request')} 
            className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
          >
            <Card>
              <div className="text-center p-4 md:p-6">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-red-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Request Blood</h3>
                <p className="text-sm md:text-base text-gray-600">Find blood donors near your location</p>
              </div>
            </Card>
          </button>

          <button 
            onClick={() => navigate('/donate')} 
            className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
          >
            <Card>
              <div className="text-center p-4 md:p-6">
                <UserPlus className="w-10 h-10 md:w-12 md:h-12 text-red-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Donate Blood</h3>
                <p className="text-sm md:text-base text-gray-600">Register as a blood donor</p>
              </div>
            </Card>
          </button>
        </div>
      </div>
    </Layout>
  );
}