"use client";
import { Divider } from "@/components/Divider";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";
import React from "react";
import { AbsoluteButton } from "../auth/components/AbsoluteButton";
import { AuthDescription } from "../auth/components/AuthDescription";
import { ReportIssueForm } from "./components/ReportIssueForm";

export const ReportContent = () => {
  const router = useRouter();

  return (
    <div className="relative flex-1 flex flex-col gap-7 px-5 py-4 justify-center">
      <AuthDescription
        text="Report an issue"
        subText="Providing a link for a video or an image would be really helpful for fixing the issue. "
      />

      <ReportIssueForm />

      <Divider />

      <div className="flex text-sm gap-1 font-bold self-center">
        <div className="font-light">{"This also doesn't work?"}</div>

        <div className="font-bold">magbualmarcel@gmail.com</div>
      </div>

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign In"
      />
    </div>
  );
};
