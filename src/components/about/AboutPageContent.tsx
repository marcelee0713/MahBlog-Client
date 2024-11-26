import { ABOUT_INFORMATION } from "@/shared/constants/about";
import React from "react";
import { AboutSection } from "./AboutSection";
import { AboutInfoTypes } from "@/shared/ts/types/about";

export const AboutPageContent = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 w-full container mx-auto px-8 py-9">
      {Object.entries(ABOUT_INFORMATION).map(([key, value]) => {
        const newKey: AboutInfoTypes = key as AboutInfoTypes;

        return <AboutSection id={newKey} info={value} key={key} />;
      })}
    </div>
  );
};
