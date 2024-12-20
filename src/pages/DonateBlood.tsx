import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import FormField from '../components/forms/FormField';
import TextInput from '../components/forms/TextInput';
import TextArea from '../components/forms/TextArea';
import PhoneInput from '../components/forms/PhoneInput';
import BloodGroupSelect from '../components/forms/BloodGroupSelect';
import { submitDonorData } from '../services/donor';
import type { DonorData } from '../types/blood';

export default function DonateBlood() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<DonorData>({
    name: '',
    age: '',
    bloodGroup: '' as any,
    address: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitDonorData(formData);
      alert('Thank you! We are sending our team to your address.');
      navigate('/');
    } catch (error) {
      setError('Failed to submit data. Please try again.');
      console.error('Error submitting donor data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Donate Blood">
      <div className="max-w-lg mx-auto">
        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Name">
            <TextInput
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </FormField>

          <FormField label="Mobile Number">
            <PhoneInput
              required
              value={formData.mobile}
              onChange={(value) => setFormData({ ...formData, mobile: value })}
            />
          </FormField>

          <FormField label="Age">
            <TextInput
              type="number"
              required
              min="18"
              max="65"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </FormField>

          <FormField label="Blood Group">
            <BloodGroupSelect
              required
              value={formData.bloodGroup}
              onChange={(value) => setFormData({ ...formData, bloodGroup: value as any })}
            />
          </FormField>

          <FormField label="Address">
            <TextArea
              required
              rows={3}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </FormField>

          <div className="flex justify-center gap-4">
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => navigate('/')}
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}