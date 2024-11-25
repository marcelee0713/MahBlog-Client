import React, { useState } from "react";
import { SignUpFormData } from "../ts/interfaces/sign-up-interface";
import { SignUpSchema } from "../schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import { SignUpInput, SignUpPasswordInput } from "./SignUpInputs";
import Link from "next/link";
import { signUpUser } from "../api/sign-up-api";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { toast } from "sonner";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const router = useRouter();

  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Loading...");
    },

    async onSuccess() {
      setProcessing(false);
      toast.dismiss();

      router.push(ROUTES["Welcome"]);
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
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => signUpUser(data, cb))}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-10">
        <div className="flex gap-5">
          <SignUpInput
            errors={errors}
            label={"First name"}
            register={register}
            registerName="firstName"
          />

          <SignUpInput
            errors={errors}
            label={"Last name"}
            register={register}
            registerName="lastName"
          />
        </div>

        <SignUpInput
          errors={errors}
          label={"Email"}
          register={register}
          registerName="email"
        />

        <SignUpPasswordInput
          errors={errors}
          label={"Password"}
          register={register}
          registerName="password"
        />

        <SignUpPasswordInput
          errors={errors}
          label={"Confirm Password"}
          register={register}
          registerName="cfrmPassword"
        />
      </div>

      <div className="text-[13px] text-center theme-accent-text-color mt-5">
        {
          "Password should be at least 8 character(s), 1 special character, 1 number, and 1 capital letter"
        }
      </div>

      <Button text="Sign in" type="submit" disabled={processing} />

      <div className="text-[13px] text-center theme-accent-text-color">
        By creating an account you agree to our{" "}
        <Link
          href={"/about#privacy-policy"}
          className="font-bold hover:underline"
        >
          Terms of Agreement and Privacy Policy.
        </Link>
      </div>
    </form>
  );
};
