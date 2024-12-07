import React from "react";
import { IoPencil } from "react-icons/io5";

export const EmailChangeLoadingState = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <IoPencil size={150} className="animate-wiggle" />
      <div className="font-medium loading">Confirming...</div>
    </div>
  );
};
