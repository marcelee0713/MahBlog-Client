"use client";

import Lottie from "lottie-react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  animation: unknown;
}

export const MainAuthLayout = ({ children, animation }: Props) => {
  return (
    <main className="flex items-center justify-center h-full w-full px-8 py-9">
      <div className="flex theme-border rounded-md w-[950px] max-w-full container mx-auto min-h-[550px] h-fit transition-all duration-500 ease-in-out">
        <div className="flex-1 theme-accent flex items-center justify-center p-5">
          <Lottie animationData={animation} />
        </div>

        {children}
      </div>
    </main>
  );
};
