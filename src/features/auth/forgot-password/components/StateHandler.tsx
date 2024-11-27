import React, { useState } from "react";
import { FoundUserData } from "../ts/interface/forgot-pass-interface";
import { ForgotPassStateType } from "../ts/types/state";
import { ForgotPassForm } from "./form/ForgotPassForm";
import { FoundUser } from "./FoundUser";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { sendResetPasswordRequest } from "../api/forgot-pass-api";
import { toast } from "sonner";
import { ForgotPassSuccessState } from "./form/SuccessState";

export const ForgotPassStateHandler = () => {
  const [processing, setProcessing] = useState(false);

  const [state, setState] = useState<ForgotPassStateType>("FORM");

  const [foundUser, setFoundUser] = useState<FoundUserData | null>(null);

  const cbForResetPass: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Sending...");
    },

    onError(err) {
      setProcessing(false);
      toast.dismiss();
      toast.error(err.message);
    },

    onSuccess() {
      setProcessing(false);
      toast.dismiss();
      setState("SUCCESS");
    },
  };

  switch (state) {
    case "FORM":
      return (
        <ForgotPassForm
          setState={setState}
          onFound={(data) => setFoundUser(data)}
        />
      );

    case "FOUND":
      return (
        <FoundUser
          processing={processing}
          foundUser={foundUser}
          onNo={() => {
            setState("FORM");
            setFoundUser(null);
          }}
          onYes={async () => {
            if (!foundUser) return;

            await sendResetPasswordRequest(
              {
                email: foundUser?.email,
              },
              cbForResetPass
            );
          }}
        />
      );

    case "SUCCESS":
      return <ForgotPassSuccessState />;

    default:
      return <div></div>;
  }
};
