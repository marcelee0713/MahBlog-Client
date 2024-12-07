import React, { useState } from "react";
import { ChangePasswordFormData } from "../../../ts/interface/settings-interfaces";
import { ChangePasswordSchema } from "../../../schemas/forms-schemas";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/Button";
import { ChangePassInput } from "./ChangePassInputs";
import { changePassword } from "../../../api/change-password-api";
import { useRouter } from "next/navigation";

export const ChangePassword = () => {
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
      toast.success("Successfully changed your password");

      const signOut = getValues("removeSessions");

      if (signOut) router.replace("/sign-in");

      reset();
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
    getValues,
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      useCase: "CHANGE_PASSWORD",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await changePassword(data, cb))}
      className="flex flex-col gap-10 theme-border w-[325px] h-auto p-4 py-5 rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-10">
        <ChangePassInput
          errors={errors}
          label="Current Password"
          register={register}
          registerName="password"
        />

        <ChangePassInput
          errors={errors}
          label="New Password"
          register={register}
          registerName="newPassword"
        />

        <ChangePassInput
          errors={errors}
          label="Confirm New Password"
          register={register}
          registerName="cfrmPassword"
        />
      </div>
      <div className="flex flex-col gap-5 text-[13px] text-center theme-accent-text-color">
        <div className="">
          {
            "Password should be at least 8 character(s), 1 special character, 1 number, and 1 capital letter"
          }
        </div>

        <div className="flex gap-2 items-center w-full justify-center">
          <input
            type="checkbox"
            className="cursor-pointer accent-dark-accent rounded-lg"
            disabled={processing}
            {...register("removeSessions")}
          />
          <div className="theme-accent-text-color">Sign out all devices?</div>
        </div>

        <Button text="Submit" type="submit" disabled={processing} />
      </div>
    </form>
  );
};
