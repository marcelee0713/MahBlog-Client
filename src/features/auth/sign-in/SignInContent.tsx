"use client";

import { ROUTES } from "@/shared/constants/routes";
import React from "react";
import { AuthDescription } from "../components/AuthDescription";
import { Divider } from "@/components/Divider";
import { GoogleButton } from "./components/GoogleButton";
import { AbsoluteButton } from "../components/AbsoluteButton";
import { useRouter } from "next/navigation";
import { SignInForm } from "./components/SignInForm";
import { Suspense } from "react";

export const SignInContent = () => {
  const router = useRouter();

  return (
    <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
      <AuthDescription
        text="Welcome back!"
        subText="Sign in to stay connected with us"
      />

      <Suspense>
        <SignInForm />
      </Suspense>

      <Divider middleText="OR" />

      <GoogleButton />

      <AbsoluteButton
        onClick={() => router.push(ROUTES["SignUp"])}
        text="Sign up"
      />
    </div>
  );
};
