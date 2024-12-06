import React, { useState } from "react";
import { DeviceVerificationFormData } from "../ts/interfaces/device-verif-interface";
import { DeviceVerifSchema } from "../schemas/device-verif-schema";
import { Button } from "@/components/Button";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { redirect, useSearchParams } from "next/navigation";
import { CodeInput } from "./DeviceVerifInput";
import { verifyUserDevice } from "../api/device-verif-api";
import useUser from "@/shared/hooks/user";

export const DeviceVerifForm = () => {
  const { fetchUser, toggleFetch } = useUser();

  const params = useSearchParams();

  const token = params.get("token") ?? "";

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
      toast.success("Successfully verified!");

      toggleFetch(true);

      await fetchUser();

      redirect("/");
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
  } = useForm<DeviceVerificationFormData>({
    resolver: zodResolver(DeviceVerifSchema),
    defaultValues: {
      token,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await verifyUserDevice(data, cb))}
      className="flex flex-col gap-10"
    >
      <CodeInput errors={errors} register={register} />
      <Button text="Submit" type="submit" disabled={processing} />
    </form>
  );
};
