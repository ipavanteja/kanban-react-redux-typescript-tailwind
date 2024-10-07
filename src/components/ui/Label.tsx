import React from "react";

interface LabelProps {
  htmlFor?: string; // To associate the label with a form field
  children: React.ReactNode; // The label text or child components
  color?: "default" | "primary" | "secondary" | "error"; // Color options
  align?: "left" | "center" | "right"; // Text alignment
  required?: boolean; // If the label is for a required field
  className?: string; // To accept custom styles
}

// Base classes for different colors
const colorClasses = {
  default: "text-gray-700",
  primary: "text-blue-600",
  secondary: "text-gray-600",
  error: "text-red-500",
};

// Base classes for text alignment
const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  color = "default",
  align = "left",
  required = false,
  className = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${colorClasses[color]} ${alignClasses[align]} font-medium block ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
