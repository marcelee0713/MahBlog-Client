"use client";

import { Divider } from "@/components/Divider";
import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/shared/constants/routes";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { emailChangeConfirmation } from "./api/email-change-confirmation-api";
import { EmailChangeStateHandler } from "./components/StateHandler";

export const EmailChangeConfirmationContent = () => {
  const params = useSearchParams();

  const token = params.get("token");

  const [state, setState] = useState<"LOADING" | "ERROR" | "SUCCESS">(
    "LOADING"
  );

  const [errMsg, setErrMsg] = useState<string | undefined>();

  const cb: CallbacksInterface = {
    onLoading() {
      setState("LOADING");
    },

    onSuccess() {
      setState("SUCCESS");
    },

    onError(err) {
      setState("ERROR");

      setErrMsg(err.message);
    },
  };

  useEffect(() => {
    if (token) emailChangeConfirmation(token, cb);
    else {
      setState("ERROR");

      setErrMsg("Request token not found. You might have modified the link.");
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center gap-5 py-5 px-10 w-[375px] max-w-[420px]">
      <EmailChangeStateHandler state={state} errorMessage={errMsg} />

      <Divider />

      <div className="flex text-sm gap-1 font-bold self-center">
        <div className="font-light">Something went wrong?</div>

        <UnderLineButton
          onClick={() => ROUTES["Report"]}
          text="Send us a report"
        />
      </div>
    </div>
  );
};
