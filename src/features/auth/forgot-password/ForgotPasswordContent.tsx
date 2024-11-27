"use client";

import React from "react";
import { AuthDescription } from "../components/AuthDescription";
import { Divider } from "@/components/Divider";
import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/shared/constants/routes";
import { ForgotPassStateHandler } from "./components/StateHandler";
import { AbsoluteButton } from "../components/AbsoluteButton";
import { useRouter } from "next/navigation";

export const ForgotPasswordContent = () => {
  const router = useRouter();

  return (
    <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
      <AuthDescription
        text="Forgot Password"
        subText="Forgot your password? Let's find you first!"
      />

      <ForgotPassStateHandler />

      <Divider />

      <div className="flex text-sm gap-1 font-bold self-center">
        <div className="font-light">Something went wrong?</div>

        <UnderLineButton
          onClick={() => ROUTES["Report"]}
          text="Send us a report"
        />
      </div>

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign In"
      />
    </div>
  );
};
