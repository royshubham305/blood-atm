import { BloodGroup } from '../types/blood';

interface BloodGroupSelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function BloodGroupSelect({ value, onChange, required }: BloodGroupSelectProps) {
  const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <select
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select Blood Group</option>
      {bloodGroups.map((group) => (
        <option key={group} value={group}>{group}</option>
      ))}
    </select>
  );
}