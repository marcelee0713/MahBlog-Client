import { Button } from "@/components/Button";
import { UnderLineButton } from "@/components/UnderLineButton";
import React, { useEffect, useState } from "react";
import { SignInFormData } from "../ts/interfaces/sign-in-interface";
import { SignInSchema } from "../schemas/sign-in-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailInput, PasswordInput } from "./SignInInputs";
import { signInUser } from "../api/sign-in-api";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { mutate } from "swr";
import { ROUTES } from "@/shared/constants/routes";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { reqEmailVerification } from "../../shared/api/req-email-verif-api";
import { ReqEmailVerifyBody } from "../../shared/ts/interfaces/req-email-verif-interface";

export const SignInForm = () => {
  const router = useRouter();

  const params = useSearchParams();

  const [processing, setProcessing] = useState(false);

  const code = params.get("error") === "wrong-authentication-type";

  const emailCallback: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Sending...");
    },
    onError(result) {
      setProcessing(false);
      toast.dismiss();
      toast.error(result.message);
    },
    onSuccess() {
      setProcessing(false);
      toast.dismiss();
      toast.success("Email verification sent");
    },
  };

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Loading...");
    },

    async onSuccess() {
      setProcessing(false);
      toast.dismiss();

      await mutate("/api/user");

      router.push(ROUTES["Home"]);
    },

    onError(err) {
      setProcessing(false);

      if (err.code === "user-not-verified") return userNotVerified(err.message);

      toast.dismiss();
      toast.error(err.message);
    },
  };

  const userNotVerified = (msg: string) => {
    const body: ReqEmailVerifyBody = {
      email: getValues("email"),
      useCase: "VERIFY_EMAIL",
    };

    toast.dismiss();

    toast.error(msg, {
      description:
        "Would you like to send us another email verification request?",
      action: {
        label: "Yes",
        onClick: async () => reqEmailVerification(body, emailCallback),
      },
      closeButton: true,
      duration: 10000, // <- in milliseconds (10 seconds).
    });
  };

  useEffect(() => {
    if (code)
      toast.error(
        "Please sign in using your email and password, as your account was created through the traditional sign-in method."
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await signInUser(data, cb))}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-10">
        <EmailInput errors={errors} register={register} label="Email" />

        <div className="flex flex-col gap-2">
          <PasswordInput errors={errors} register={register} label="Password" />

          <div className="w-fit text-sm ml-3">
            <UnderLineButton
              onClick={() => router.push(ROUTES["ForgotPass"])}
              text="Forgot Password?"
            />
          </div>
        </div>
      </div>

      <Button text="Sign in" type="submit" disabled={processing} />
    </form>
  );
};
