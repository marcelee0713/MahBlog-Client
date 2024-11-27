import { Button } from "@/components/Button";
import { ROUTES } from "@/shared/constants/routes";
import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import { AbsoluteButton } from "../../../components/AbsoluteButton";
import { useRouter, useSearchParams } from "next/navigation";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { reqEmailVerification } from "@/features/auth/shared/api/req-email-verif-api";
import { toast } from "sonner";

interface props {
  message?: string;
}

export const EmailVerifErrorState = ({
  message = "An unexpected error occured",
}: props) => {
  const params = useSearchParams();

  const token = params.get("token");

  const [processing, setProcessing] = useState(false);

  const router = useRouter();

  const cb: CallbacksInterface = {
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
      toast.success("Email verification sent.");
    },
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <MdOutlineError size={150} />
      <div className="flex flex-col gap-1 text-center">
        <div className="font-medium ">Error</div>
        <div className="text-sm">{message}</div>
      </div>

      <Button
        text="Re-send Email Verification"
        disabled={processing}
        onClick={async () =>
          await reqEmailVerification(
            {
              useCase: "VERIFY_EMAIL_BY_TOKEN",
              token: token ?? "",
            },
            cb
          )
        }
      />

      <AbsoluteButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />
    </div>
  );
};
