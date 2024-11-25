"use client";

import { ROUTES } from "@/shared/constants/routes";
import React from "react";
import { AuthDescription } from "../components/AuthDescription";
import { AbsoluteButton } from "../components/AbsoluteButton";
import { useRouter } from "next/navigation";
import { SignUpForm } from "./components/SignUpForm";

export const SignUpContent = () => {
  const router = useRouter();

  return (
    <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
      <AuthDescription text="Sign Up" subText="Create an account" />

      <SignUpForm />

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />
    </div>
  );
};
