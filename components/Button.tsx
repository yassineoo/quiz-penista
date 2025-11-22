import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";
  
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    secondary: "bg-brand-surface text-brand-accent border border-brand-accent/20 hover:border-brand-accent/50 hover:bg-indigo-900",
    outline: "bg-transparent border-2 border-white/20 text-white hover:bg-white/10",
    danger: "bg-rose-500 text-white hover:bg-rose-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
