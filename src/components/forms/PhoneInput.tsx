interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function PhoneInput({ value, onChange, error, ...props }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 10) {
      onChange(input);
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return '';
    return `+91 ${value}`;
  };

  return (
    <div>
      <div className="relative">
        <input
          type="tel"
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 pl-12 ${
            error ? 'border-red-500' : ''
          }`}
          value={value}
          onChange={handleChange}
          placeholder="Enter 10 digit mobile number"
          maxLength={10}
          {...props}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          +91
        </span>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}