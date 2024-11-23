import React from "react";

interface props {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

export const Button: React.FC<props> = ({ text, onClick, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 hover:theme-accent transition-colors duration-300 ease-out h-[50px] disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
};
