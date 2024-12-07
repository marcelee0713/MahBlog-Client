import { IconButtonType } from "@/shared/ts/interfaces/global";
import React from "react";

export const IconButton: React.FC<IconButtonType> = ({
  icon: Icon,
  text,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`icon-button-style ${className}`}>
      <Icon size={20} />
      <div className="text-sm">{text}</div>
    </button>
  );
};
