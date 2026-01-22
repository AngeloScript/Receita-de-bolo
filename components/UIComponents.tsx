import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const CTAButton: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyle = "group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-1 hover:shadow-xl rounded-full text-lg md:text-xl";
  
  const variants = {
    primary: "bg-brand-orange hover:bg-orange-600 focus:ring-orange-500 shadow-orange-500/30",
    secondary: "bg-brand-green hover:bg-brand-darkGreen focus:ring-green-500 shadow-green-500/30"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; className?: string }> = ({ 
  children, 
  subtitle,
  className = '' 
}) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darkGreen mb-4 leading-tight">
      {children}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
  </div>
);

export const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start space-x-3 mb-4">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle2 className="w-6 h-6 text-brand-green" />
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
  </div>
);