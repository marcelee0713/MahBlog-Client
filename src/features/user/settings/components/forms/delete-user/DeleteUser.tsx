import { Button } from "@/components/Button";
import useUser from "@/shared/hooks/user";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { DeleteUserSchema } from "../../../schemas/forms-schemas";
import { DeleteUserFormData } from "../../../ts/interface/settings-interfaces";
import { DeleteUserInput } from "./DeleteUserInput";
import useProfile from "@/shared/hooks/user-profile";
import { deleteUser } from "../../../api/delete-user-api";
import { useRouter } from "next/navigation";

export const DeleteUser = () => {
  const router = useRouter();
  const { user, clearUser, toggleFetch } = useUser();
  const { profile, setProfile } = useProfile(user);
  const [processing, setProcessing] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);

      toast.dismiss();
      toast.loading("Preparing to say goodbye...");
    },

    onSuccess() {
      setProcessing(false);

      toast.success(
        `Goodbye, hope to see you come back ${profile?.firstName}...`
      );

      toast.dismiss();

      clearUser();

      setProfile(null);

      toggleFetch(false);

      reset();

      router.push("/landing");
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
  } = useForm<DeleteUserFormData>({
    resolver: zodResolver(DeleteUserSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => await deleteUser(cb))}
      className="flex flex-col gap-10 theme-border w-[325px] h-auto p-4 py-5 rounded-lg shadow-lg"
    >
      <DeleteUserInput errors={errors} register={register} />

      <div className="flex flex-col gap-5 text-[13px] text-center theme-accent-text-color">
        <div>
          In order to delete your account, please type delete my account to
          confirm.
        </div>

        <div>
          This will delete every blog, drafts, and etc.. are you still sure?
        </div>

        <Button text="Submit" type="submit" disabled={processing} />
      </div>
    </form>
  );
};
