"use client";

import { ROUTES } from "@/shared/constants/routes";
import Lottie from "lottie-react";
import React from "react";
import { AuthDescription } from "../components/AuthDescription";
import { Divider } from "@/components/Divider";
import { GoogleButton } from "./components/GoogleButton";
import { AbsoluteButton } from "../components/AbsoluteButton";
import { useRouter } from "next/navigation";
import { SignInForm } from "./components/SignInForm";

interface props {
  animation: unknown;
}

export const SignInContent: React.FC<props> = ({ animation }) => {
  const router = useRouter();

  return (
    <div className="flex theme-border rounded-md w-[900px] max-w-full h-[550px] container mx-auto">
      <div className="flex-1 theme-accent flex items-center justify-center p-5">
        <Lottie animationData={animation} />
      </div>

      <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
        <AuthDescription
          text="Welcome back!"
          subText="Sign in to stay connected with us"
        />

        <SignInForm />

        <Divider middleText="OR" />

        <GoogleButton />

        <AbsoluteButton
          onClick={() => router.push(ROUTES["SignUp"])}
          text="Sign up"
        />
      </div>
    </div>
  );
};
