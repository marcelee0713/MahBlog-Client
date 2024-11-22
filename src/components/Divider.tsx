import React from "react";

interface props {
  middleText?: string;
}

export const Divider: React.FC<props> = ({ middleText }) => {
  return (
    <div className="relative">
      <div className="w-full h-[1px] theme-accent"></div>
      {middleText && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 theme-background px-2 text-sm">
          {middleText}
        </div>
      )}
    </div>
  );
};
