"use client";

import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/shared/constants/routes";
import React, { useEffect, useState } from "react";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { Divider } from "@/components/Divider";
import { EmailVerifStateHandler } from "./components/StateHandler";
import { useSearchParams } from "next/navigation";
import { EmailVerifyReq } from "./ts/interfaces/email-verif-interface";
import { verifyUserEmail } from "./api/email-verif.api";

export const EmailVerificationContent = () => {
  const params = useSearchParams();

  const token = params.get("token");

  const [state, setState] = useState<"LOADING" | "ERROR" | "SUCCESS">(
    "LOADING"
  );

  const [errMsg, setErrMsg] = useState<string | undefined>();

  const reqBody: EmailVerifyReq = {
    token,
    useCase: "VERIFY_EMAIL",
  };

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
    if (token) verifyUserEmail(reqBody, cb);
    else {
      setState("ERROR");

      setErrMsg("Request token not found. You might have modified the link.");
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center gap-5 py-5 px-10 w-[375px] max-w-[420px]">
      <EmailVerifStateHandler state={state} errorMessage={errMsg} />

      <Divider />

      <div className="flex text-sm gap-1 font-bold self-center">
        <div className="font-light">Something went wrong?</div>

        <UnderLineButton onClick={() => ROUTES["Report"]} text="Report it" />
      </div>
    </div>
  );
};
