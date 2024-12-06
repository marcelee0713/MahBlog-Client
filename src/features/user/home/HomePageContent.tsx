"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import React, { useEffect } from "react";

export const HomePageContent = () => {
  useEffect(() => {
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <div className="h-10 w-10 theme-accent font-openSans">Hello</div>

      <div className="!bg-red-700 w-4 h-4 font-openSans">HELLO</div>

      <ThemeSwitcher />
    </div>
  );
};
