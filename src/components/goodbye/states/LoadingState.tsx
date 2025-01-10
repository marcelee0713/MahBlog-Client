import React from "react";
import { IoPencil } from "react-icons/io5";

export const EmailVerifLoadingState = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <IoPencil size={150} className="animate-wiggle" />
      <div className="font-medium loading">Verifying...</div>
    </div>
  );
};
