import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import FormField from '../components/forms/FormField';
import TextInput from '../components/forms/TextInput';
import { authenticateAdmin } from '../services/auth';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const isAuthenticated = await authenticateAdmin({ username, password });
      if (isAuthenticated) {
        sessionStorage.setItem('adminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Admin Login">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Lock className="w-12 h-12 text-red-600" />
        </div>

        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Username">
            <TextInput
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </FormField>

          <FormField label="Password">
            <TextInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </FormField>

          <div className="flex justify-center">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}