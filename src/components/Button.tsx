import React from "react";

interface props {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 "
    >
      {text}
    </button>
  );
};
