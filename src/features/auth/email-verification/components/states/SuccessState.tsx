import { ROUTES } from "@/shared/constants/routes";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { AbsoluteButton } from "../../../components/AbsoluteButton";
import { useRouter } from "next/navigation";

export const EmaiLVerifSuccessState = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 items-center">
      <FaCircleCheck size={150} />
      <div className="flex flex-col gap-1 text-center">
        <div className="font-medium ">Success!</div>
        <div className="text-sm">
          You have successfully verified your account to MahBlog!
        </div>
      </div>

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />
    </div>
  );
};
