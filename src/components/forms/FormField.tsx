import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  children: ReactNode;
}

export default function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-1 md:space-y-2">
      <label className="block text-sm md:text-base font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}