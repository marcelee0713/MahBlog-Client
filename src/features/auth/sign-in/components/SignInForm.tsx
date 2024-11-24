import { Button } from "@/components/Button";
import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/constants";
import React, { useState } from "react";
import { SignInFormData } from "../ts/interfaces/sign-in-interface";
import { SignInSchema } from "../schemas/sign-in-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailInput, PasswordInput } from "./SignInInputs";
import { CallbacksInterface } from "@/ts/interfaces/global";
import { signInUser } from "../api/sign-in-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const router = useRouter();

  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Loading...");
    },

    onSuccess() {
      setProcessing(false);
      toast.dismiss();

      // TODO: Mutate the User Provider Data here, when we have one now.

      // Then...
      router.push(ROUTES["Home"]);
    },

    onError(err) {
      setProcessing(false);
      toast.dismiss();
      toast.error(err.message);
    },
  };

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
