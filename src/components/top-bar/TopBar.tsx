"use client";
import React from "react";
import { LogoAndName } from "./LogoAndName";
import { QuickActionRightMenu } from "./right_panel/QuickActionRightMenu";

export const TopBar = () => {
  return (
    <div className="h-[60px] w-full theme-border !border-l-0 !border-t-0 !border-r-0">
      <div className="h-full w-full flex items-center justify-between container mx-auto">
        <LogoAndName />
        <QuickActionRightMenu />
      </div>
    </div>
  );
};
