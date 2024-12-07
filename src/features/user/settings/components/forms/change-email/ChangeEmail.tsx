import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import React, { useState } from "react";
import { toast } from "sonner";
import { ChangeEmailFormData } from "../../../ts/interface/settings-interfaces";
import { ChangeEmailSchema } from "../../../schemas/forms-schemas";
import { Button } from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmailInput } from "./ChangeEmailInput";
import { changeEmail } from "../../../api/change-email-api";
import useUser from "@/shared/hooks/user";

export const ChangeEmail = () => {
  const { user } = useUser();
  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);

      toast.dismiss();
      toast.loading("Loading...");
    },

    onSuccess() {
      setProcessing(false);

      toast.success("We have sent you an email change confirmation");
      toast.dismiss();

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
    reset,
  } = useForm<ChangeEmailFormData>({
    resolver: zodResolver(ChangeEmailSchema),
    defaultValues: {
      email: user?.email,
      useCase: "CHANGE_EMAIL",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await changeEmail(data, cb))}
      className="flex flex-col gap-10 theme-border w-[325px] h-auto p-4 py-5 rounded-lg shadow-lg"
    >
      <EmailInput errors={errors} register={register} />

      <div className="flex flex-col gap-5 text-[13px] text-center theme-accent-text-color">
        <div>
          We will send you a link to your current email for confirmation. After
          that, we will also send an email verification to your new email.
        </div>

        <div>
          Please be aware that you can only change this every{" "}
          <strong>90 days.</strong>
        </div>

        <Button text="Submit" type="submit" disabled={processing} />
      </div>
    </form>
  );
};
