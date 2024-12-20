interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export default function TextArea({ className = '', error, ...props }: TextAreaProps) {
  return (
    <div>
      <textarea
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}