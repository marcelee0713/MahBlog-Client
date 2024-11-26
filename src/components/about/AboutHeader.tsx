"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/svg/logo.svg";
import { AboutInfo } from "@/shared/ts/interfaces/about";
import { ABOUT_INFORMATION } from "@/shared/constants/about";
import { AbsoluteButton } from "@/features/auth/components/AbsoluteButton";
import { useRouter } from "next/navigation";

export const AboutHeader = () => {
  const router = useRouter();

  const obj: AboutInfo = ABOUT_INFORMATION["about"];

  return (
    <div className="relative flex flex-col min-h-[500px] theme-accent gap-5 items-center justify-center p-3">
      <Image alt="logo" src={logo} />

      <div className="flex flex-col gap-2 items-center container mx-auto text-center">
        <div className="font-bold text-4xl">
          About <span className="font-sourceSerif4">MahBlog</span>
        </div>
        <div>{obj.description}</div>
      </div>

      <AbsoluteButton onClick={() => router.back()} text="Go Back" />
    </div>
  );
};
