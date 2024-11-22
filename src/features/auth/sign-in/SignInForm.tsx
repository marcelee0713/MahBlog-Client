"use client";

import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/constants";
import Lottie from "lottie-react";
import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { AuthDescription } from "../components/AuthDescription";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { GoogleButton } from "./components/GoogleButton";
import { AbsoluteButton } from "../components/AbsoluteButton";
import { useRouter } from "next/navigation";

interface props {
  animation: unknown;
}

// TODO: Fix the structure of this.
// TODO: Integrate the function of this
export const SignInPageContent: React.FC<props> = ({ animation }) => {
  const router = useRouter();

  return (
    <div className="flex theme-border rounded-md w-[900px] max-w-full h-[500px] container mx-auto">
      <div className="flex-1 theme-accent flex items-center justify-center p-5">
        <Lottie animationData={animation} />
      </div>
      <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
        <AuthDescription
          text="Welcome back!"
          subText="Sign in to stay connected with us"
        />

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

            <div className="self-end text-sm">
              <UnderLineButton
                onClick={() => ROUTES["ForgotPass"]}
                text="Forgot Password?"
              />
            </div>
          </div>
        </div>

        <Button onClick={() => {}} text="Sign in" />

        <Divider middleText="OR" />

        <GoogleButton onClick={() => {}} />

        <AbsoluteButton
          onClick={() => router.push(ROUTES["SignUp"])}
          text="Sign up"
        />
      </div>
    </div>
  );
};
