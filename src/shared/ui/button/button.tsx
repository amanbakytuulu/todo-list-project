import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = `transition-colors rounded-lg disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed`;

  const variantStyles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 px-4 py-2",
    secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2",
    icon: "text-gray-400 hover:text-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
