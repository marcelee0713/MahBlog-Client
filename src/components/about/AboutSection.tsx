import { AboutInfo } from "@/shared/ts/interfaces/about";
import React from "react";
import { AboutLists } from "./AboutLists";
import { AboutInfoTypes } from "@/shared/ts/types/about";

interface props {
  info: AboutInfo;
  id: AboutInfoTypes;
}

export const AboutSection: React.FC<props> = ({ info, id }) => {
  const { header, description, lists, effectiveDate, footer } = info;

  return (
    <div id={id} className="flex flex-col gap-5">
      {header && (
        <div className="flex flex-col">
          <div className="font-bold text-4xl">{header}</div>
          {effectiveDate && <div>{`Effective Date: ${effectiveDate}`}</div>}
        </div>
      )}

      {id !== "about" && <div>{description}</div>}

      {lists.map((val, i) => (
        <AboutLists list={val} key={i} />
      ))}

      <div>{footer}</div>
    </div>
  );
};
