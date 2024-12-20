interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function TextInput({ className = '', error, ...props }: TextInputProps) {
  return (
    <div>
      <input
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}