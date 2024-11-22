import { Button } from "@/components/Button";
import { UnderLineButton } from "@/components/UnderLineButton";
import { ROUTES } from "@/constants";
import React from "react";
import { SignInFormData } from "../interfaces/sign-in-interface";
import { SignInSchema } from "../schemas/sign-in-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailInput, PasswordInput } from "./SignInInputs";

// TODO: Integrate the API call here
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-10">
        <EmailInput errors={errors} register={register} label="Email" />

        <div className="flex flex-col gap-2">
          <PasswordInput errors={errors} register={register} label="Password" />

          <div className="w-fit text-sm ml-3">
            <UnderLineButton
              onClick={() => ROUTES["ForgotPass"]}
              text="Forgot Password?"
            />
          </div>
        </div>
      </div>

      <Button text="Sign in" type="submit" />
    </form>
  );
};
