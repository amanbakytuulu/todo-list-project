import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <input
      className={`p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    />
  );
};
