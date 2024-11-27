import { Button } from "@/components/Button";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ResetPassFormData } from "../ts/interfaces/reset-pass-interface";
import { ResetPassSchema } from "../schema/reset-pass-schema";
import { ResetPasswordInput } from "./ResetPassInputs";
import { resetPassword } from "../api/reset-pass-api";
import { useSearchParams } from "next/navigation";

export const ResetPassForm = () => {
  const params = useSearchParams();

  const token = params.get("token");

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
      toast.success("Successfully reset your password!");
    },

    onError(err) {
      setProcessing(false);

      if (err.code === "user-current-password-does-not-match") {
        toast.dismiss();
        setError("currentPassword", { message: err.message });
        return;
      }

      toast.dismiss();
      toast.error(err.message);
    },
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ResetPassFormData>({
    resolver: zodResolver(ResetPassSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await resetPassword(
          {
            ...data,
            removeSessions: true,
            useCase: "RESET_PASSWORD",
            token: token ?? "",
          },
          cb
        );
      })}
      className="flex flex-col gap-10"
    >
      <ResetPasswordInput
        errors={errors}
        register={register}
        label="Current Password"
        registerName="currentPassword"
      />

      <ResetPasswordInput
        errors={errors}
        register={register}
        label="New Password"
        registerName="password"
      />

      <ResetPasswordInput
        errors={errors}
        register={register}
        label="Confirm New Password"
        registerName="cfrmPassword"
      />

      <div className="text-[13px] text-center theme-accent-text-color">
        {
          "Password should be at least 8 character(s), 1 special character, 1 number, and 1 capital letter"
        }
      </div>

      <Button text="Submit" type="submit" disabled={processing} />
    </form>
  );
};
