import React from "react";

interface props {
  text: string;
  subText: string;
}

export const AuthDescription: React.FC<props> = ({ text, subText }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-bold text-3xl font-sourceSerif4">{text}</div>
      <div className="theme-accent-text-color">{subText}</div>
    </div>
  );
};
