import { ROUTES } from "@/shared/constants/routes";
import React from "react";
import { MdOutlineError } from "react-icons/md";
import { useRouter } from "next/navigation";
import { AbsoluteButton } from "@/features/auth/components/AbsoluteButton";

interface props {
  message?: string;
}

export const EmailVerifErrorState = ({
  message = "An unexpected error occured",
}: props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 items-center">
      <MdOutlineError size={150} />
      <div className="flex flex-col gap-1 text-center">
        <div className="font-medium ">Error</div>
        <div className="text-sm">{message}</div>
      </div>

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />
    </div>
  );
};
