import React from "react";
import clsx from "clsx";
import { ReactNode } from "react";

// Define types for the props
interface CustomButtonProps {
  textName: ReactNode; // Allow textName to be a ReactNode (string, element, etc.)
  icon?: ReactNode; // Optional icon prop
  handleAnything?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => void; // Supports both click and form submit events
  className?: string; // Allow className to be passed as a prop
  type?: "button" | "submit" | "reset"; // Button type, narrowed to valid values
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  textName,
  icon,
  handleAnything,
  className = "",
  type = "button", // default value for 'type'
  disabled = false, // default value for 'disabled'
}) => {
  return (
    <>
      <button
        onClick={(e) => {
          if (disabled) return; // 🔒 Ignore click if disabled, so prevents any click handler if disabled
          handleAnything?.(e);
        }}
        type={type} // the `type` prop here
        disabled={disabled}
        className={clsx(
          "relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease bg-gradient-to-r from-blue-500 to-purple-500">
          {icon}
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
          {textName}
        </span>
        <span className="relative invisible">{textName}</span>
      </button>
    </>
  );
};

export default CustomButton;
