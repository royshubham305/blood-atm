import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import DataTable from '../components/admin/DataTable';
import TabSelector from '../components/admin/TabSelector';
import { fetchDonors, fetchRequests } from '../services/admin';
import { DonorSubmission, RecipientSubmission } from '../types/admin';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [donors, setDonors] = useState<DonorSubmission[]>([]);
  const [requests, setRequests] = useState<RecipientSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'donors' | 'requests'>('donors');

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    const loadData = async () => {
      try {
        const [donorsData, requestsData] = await Promise.all([
          fetchDonors(),
          fetchRequests()
        ]);
        setDonors(donorsData);
        setRequests(requestsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    navigate('/admin');
  };

  if (loading) {
    return (
      <Layout title="Admin Dashboard">
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="text-gray-600">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Admin Dashboard">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <TabSelector
            activeTab={activeTab}
            donorsCount={donors.length}
            requestsCount={requests.length}
            onTabChange={setActiveTab}
          />
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-red-600 hover:text-red-700"
          >
            Logout
          </button>
        </div>

        <DataTable
          data={activeTab === 'donors' ? donors : requests}
          type={activeTab}
        />
      </div>
    </Layout>
  );
}