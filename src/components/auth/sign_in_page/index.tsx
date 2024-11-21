"use client";

import { ROUTES } from "@/constants";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

interface props {
  animation: unknown;
}

// TODO: Fix the structure of this.
// TODO: Integrate the function of this
export const SignInPageContent: React.FC<props> = ({ animation }) => {
  return (
    <div className="flex theme-border rounded-md w-[900px] max-w-full h-[500px] container mx-auto">
      <div className="flex-1 theme-accent flex items-center justify-center p-5">
        <Lottie animationData={animation} />
      </div>
      <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
        <div className="flex flex-col gap-1">
          <div className="font-bold text-3xl font-sourceSerif4">
            Welcome back!
          </div>
          <div>Sign in to stay connected with us</div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex max-h-auto items-center gap-2 theme-border !border-b !border-l-0 !border-t-0 !border-r-0">
            <MdOutlineMailOutline size={20} />
            <input
              type="text"
              className="bg-transparent outline-none font-medium flex-1 py-2 placeholder:theme-background"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex max-h-auto items-center gap-2 theme-border !border-b !border-l-0 !border-t-0 !border-r-0">
              <IoKeyOutline size={20} />
              <input
                type="text"
                className="bg-transparent outline-none font-medium flex-1 py-2 placeholder:theme-background"
                placeholder="Password"
              />
            </div>

            <Link
              href={ROUTES["ResetPass"]}
              className="self-end text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 ">
          Sign In
        </div>

        <div className="relative">
          <div className="w-full h-[1px] theme-accent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 theme-background px-2 text-sm">
            OR
          </div>
        </div>

        <div className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 gap-2">
          <FcGoogle size={20} />

          <div>Sign in with Google</div>
        </div>

        <Link
          href={ROUTES["SignUp"]}
          className="absolute flex items-center gap-[2px] top-3 right-3 text-sm group"
        >
          <div>Sign Up</div>
          <IoIosArrowForward
            size={20}
            className="transition-transform duration-300  ease-in group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};
