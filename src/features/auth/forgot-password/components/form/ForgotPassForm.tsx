import { Button } from "@/components/Button";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { findUserByEmail } from "../../api/forgot-pass-api";
import { ForgotPassSchema } from "../../schema/forgot-pass-schema";
import {
  ForgotPassFormData,
  FoundUserData,
} from "../../ts/interface/forgot-pass-interface";
import { EmailInput } from "./EmailInput";
import { ForgotPassStateType } from "../../ts/types/state";

interface props {
  setState: Dispatch<SetStateAction<ForgotPassStateType>>;
  onFound: (foundUser: FoundUserData) => void;
}

export const ForgotPassForm = ({ setState, onFound }: props) => {
  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);

      toast.dismiss();
      toast.loading("Loading...");
    },

    onSuccess(data) {
      setProcessing(false);

      toast.dismiss();

      setState("FOUND");

      const obj: FoundUserData = data as FoundUserData;

      onFound(obj);
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
  } = useForm<ForgotPassFormData>({
    resolver: zodResolver(ForgotPassSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await findUserByEmail(data, cb))}
      className="flex flex-col gap-10"
    >
      <EmailInput errors={errors} register={register} />

      <Button text="Submit" type="submit" disabled={processing} />
    </form>
  );
};
