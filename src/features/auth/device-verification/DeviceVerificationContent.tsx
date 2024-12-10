"use client";
import { Divider } from "@/components/Divider";
import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";

import { AbsoluteButton } from "../components/AbsoluteButton";
import { AuthDescription } from "../components/AuthDescription";
import { DeviceVerifForm } from "./components/DeviceVerifForm";

export const DeviceVerificationContent = () => {
  const router = useRouter();

  return (
    <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
      <AuthDescription
        text="Device Verification"
        subText="Oops, we don't recognize this device. We sent you an email device verification with six-digit code in it."
      />

      <Suspense>
        <DeviceVerifForm />
      </Suspense>

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
