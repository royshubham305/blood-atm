interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base';
  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 focus:ring-red-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}