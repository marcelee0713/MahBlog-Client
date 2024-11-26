import { AboutList } from "@/shared/ts/interfaces/about";
import React from "react";

interface props {
  list: AboutList;
}

export const AboutLists = ({ list }: props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-bold text-lg">{list.header}</div>
      <ul className="list-disc">
        {list.descriptions.map((val, index) => (
          <li key={index} className="ml-5">
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};
