import { UnderLineButton } from "@/components/UnderLineButton";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface props {
  onClick: () => void;
  text: string;
}

export const AbsoluteButton: React.FC<props> = ({ onClick, text }) => {
  return (
    <div className="absolute flex items-center gap-[2px] top-3 right-3 text-sm group">
      <UnderLineButton onClick={onClick} text={text} />

      <IoIosArrowForward
        size={20}
        className="transition-transform duration-300  ease-in group-hover:translate-x-1"
      />
    </div>
  );
};
