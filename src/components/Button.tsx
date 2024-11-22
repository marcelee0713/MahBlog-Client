import React from "react";

interface props {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export const Button: React.FC<props> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 hover:theme-accent transition-colors duration-300 ease-out h-[50px]"
    >
      {text}
    </button>
  );
};
