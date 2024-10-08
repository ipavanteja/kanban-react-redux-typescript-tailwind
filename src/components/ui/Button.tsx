import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const baseStyles =
  "py-1 leading-7 px-4 rounded-md focus:outline-none transition ease-in-out duration-200";

const variantStyles = {
  primary: "bg-[#5d87ff] text-white hover:shadow-md focus:ring-blue-300",
  secondary: "bg-gray-500 text-white hover:shadow-md focus:ring-gray-300",
  outline:
    "border border-gray-500 text-gray-500 hover:shadow-md focus:ring-gray-300",
  danger: "bg-red-500 text-white hover:shadow-md focus:ring-red-300",
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;
  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
