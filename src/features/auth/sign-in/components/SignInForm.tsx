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

export const SignInForm = () => {
  const router = useRouter();

  const params = useSearchParams();

  const [processing, setProcessing] = useState(false);

  const code = params.get("error") === "wrong-authentication-type";

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
      toast.dismiss();
      toast.error(err.message);
    },
  };

  useEffect(() => {
    if (code)
      toast.error(
        "Please sign in using your email and password, as your account was created through the traditional sign-in method."
      );
  }, []);

  const {
    register,
    handleSubmit,
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
