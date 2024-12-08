import { IconButtonType } from "@/shared/ts/interfaces/global";
import React from "react";

export const IconButton: React.FC<IconButtonType> = ({
  icon: Icon,
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button-style text-sm ${className}`}
    >
      <Icon size={20} />
      <div>{text}</div>
    </button>
  );
};
