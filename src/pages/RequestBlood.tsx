import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import FormField from '../components/forms/FormField';
import TextInput from '../components/forms/TextInput';
import PhoneInput from '../components/forms/PhoneInput';
import BloodGroupSelect from '../components/forms/BloodGroupSelect';
import { submitRecipientData } from '../services/recipient';
import type { RecipientData } from '../types/blood';

export default function RequestBlood() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RecipientData>({
    patientName: '',
    age: '',
    bloodGroup: '' as any,
    hospitalName: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitRecipientData(formData);
      alert('We are searching for donors near your location.');
      navigate('/');
    } catch (error) {
      setError('Failed to submit request. Please try again.');
      console.error('Error submitting recipient data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Request Blood">
      <div className="max-w-lg mx-auto">
        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Patient Name">
            <TextInput
              type="text"
              required
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
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

          <FormField label="Hospital Name">
            <TextInput
              type="text"
              required
              value={formData.hospitalName}
              onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
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
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}