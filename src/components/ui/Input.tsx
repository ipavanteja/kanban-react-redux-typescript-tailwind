import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "filled"; // Custom variants
  error?: string; // Error message for validation
  fullWidth?: boolean; // Option to make it full width
}

const inputBaseClasses =
  "py-2 px-3 text-base block w-full rounded-md focus:ring-1 hover:focus:ring-none focus:ring-blue-500 focus:outline-none transition";

const variantClasses = {
  default: "border border-gray-300 bg-white text-gray-900",
  outline: "border-2 border-blue-500 bg-white text-gray-900",
  filled: "bg-gray-100 text-gray-900",
};

export const Input = ({
  variant = "default",
  error,
  fullWidth = false,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={`${fullWidth ? "w-full" : "w-auto"} mb-4`}>
      <input
        className={`${inputBaseClasses} ${variantClasses[variant]} ${
          error ? "border-red-500 focus:ring-red-500" : ""
        } ${className} ${fullWidth ? "w-full" : ""}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
