import React from "react";

interface props {
  text: string;
  onClick: () => void;
  textSize?: number;
}

export const UnderLineButton: React.FC<props> = ({
  text,
  onClick,
  textSize,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer ${
        textSize && `font-[${textSize}px]`
      }`}
    >
      {text}
      <div className="absolute h-[2px] group-hover:w-full theme-bg-text-color w-0 duration-700"></div>
    </div>
  );
};
