import React, { useEffect, useState } from "react";
import { ChangeNameFormData } from "../../../ts/interface/settings-interfaces";
import { ChangeNameSchema } from "../../../schemas/forms-schemas";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ChangeNameInput } from "./ChangeNameInputs";
import { Button } from "@/components/Button";
import useProfile from "@/shared/hooks/user-profile";
import { changeName } from "../../../api/change-name-api";
import useUser from "@/shared/hooks/user";

export const ChangeName = () => {
  const { user } = useUser();
  const { profile, fetchProfile } = useProfile(user);

  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);
      toast.dismiss();
      toast.loading("Loading...");
    },

    async onSuccess() {
      setProcessing(false);

      await fetchProfile();

      toast.dismiss();
      toast.success("Successfully changed your name");
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
    setValue,
    formState: { errors },
  } = useForm<ChangeNameFormData>({
    resolver: zodResolver(ChangeNameSchema),
  });

  useEffect(() => {
    setValue("firstName", profile?.firstName ?? "");
    setValue("middleName", profile?.middleName ?? undefined);
    setValue("lastName", profile?.lastName ?? "");
  }, [profile, setValue]);

  return (
    <form
      onSubmit={handleSubmit(async (data) => await changeName(data, cb))}
      className="flex flex-col gap-10 theme-border w-[325px] h-auto p-4 py-5 rounded-lg shadow-lg"
    >
      <ChangeNameInput
        errors={errors}
        label="First name"
        register={register}
        registerName="firstName"
      />
      <ChangeNameInput
        errors={errors}
        label="Middle name"
        register={register}
        registerName="middleName"
      />
      <ChangeNameInput
        errors={errors}
        label="Last name"
        register={register}
        registerName="lastName"
      />

      <div className="flex flex-col gap-5 text-[13px] text-center theme-accent-text-color">
        <div>
          Please be aware that you can only change this every{" "}
          <strong>90 days.</strong>
        </div>
        <Button text="Submit" type="submit" disabled={processing} />
      </div>
    </form>
  );
};
