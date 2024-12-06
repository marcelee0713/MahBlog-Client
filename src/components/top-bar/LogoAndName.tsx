import React from "react";
import Image from "next/image";
import logo from "../../../public/svg/logo.svg";
import Link from "next/link";
import { UnderLineButton } from "../UnderLineButton";

export const LogoAndName = () => {
  return (
    <Link href={"/"} className="flex gap-3 items-center group">
      <Image src={logo} alt="logo" width={40} height={40} className="" />
      <div className="font-bold font-sourceSerif4 text-2xl">
        <UnderLineButton onClick={() => {}} text="MahBlog" textSize={24} />
      </div>
    </Link>
  );
};
