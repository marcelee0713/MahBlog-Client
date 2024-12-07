import { ROUTES } from "@/shared/constants/routes";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { AbsoluteButton } from "../../../components/AbsoluteButton";
import { useRouter } from "next/navigation";

export const EmailChangeSuccessState = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 items-center">
      <FaCircleCheck size={150} />
      <div className="flex flex-col gap-5 text-center">
        <div className="flex flex-col gap-1">
          <div className="font-medium ">Success!</div>
          <div className="text-sm">
            You have successfully changed your email!
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[13px] theme-accent-text-color">
            We have sent an email verification to your new email address and we
            also <strong>signed out all of your devices</strong>.
          </div>

          <div className="text-[13px] theme-accent-text-color">
            It is for your security.
          </div>
        </div>
      </div>

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />
    </div>
  );
};
