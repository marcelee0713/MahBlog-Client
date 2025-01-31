import { Button } from "@/components/Button";
import useUser from "@/shared/hooks/user";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { DeleteUserSchema } from "../../../schemas/forms-schemas";
import { DeleteUserFormData } from "../../../ts/interface/settings-interfaces";
import { DeleteUserInput, PassInput } from "./DeleteUserInput";
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
      if (user?.authenticatedAs !== "LOCAL") {
        setProcessing(false);

        toast.dismiss();

        toast.success(
          `We have successfully sent you an email for user deletion verification.`
        );

        reset();

        return;
      }

      setProcessing(false);

      toast.dismiss();

      toast.success(
        `Goodbye, hope to see you come back ${profile?.firstName}...`
      );

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
    getValues,
    setError,
  } = useForm<DeleteUserFormData>({
    resolver: zodResolver(DeleteUserSchema),
    defaultValues: {
      authAs: user?.authenticatedAs,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const password = getValues("password");

        if (user?.authenticatedAs === "LOCAL" && !password) {
          return setError("password", {
            message: "Please enter your current password",
          });
        }

        if (user) await deleteUser(data, cb);
      })}
      className="flex flex-col gap-10 theme-border w-[325px] h-auto p-4 py-5 rounded-lg shadow-lg"
    >
      {user?.authenticatedAs === "LOCAL" && (
        <PassInput errors={errors} register={register} />
      )}

      <DeleteUserInput errors={errors} register={register} />

      <div className="flex flex-col gap-5 text-[13px] text-center theme-accent-text-color">
        <div>
          In order to delete your account, please type delete my account to
          confirm.
        </div>

        {user?.authenticatedAs === "LOCAL" && (
          <div>
            This will delete every blog, drafts, and etc.. are you still sure?
          </div>
        )}

        {user?.authenticatedAs !== "LOCAL" && (
          <span>
            For an additional confirmation, we will send an email to proceed the
            process.
          </span>
        )}

        <Button text="Submit" type="submit" disabled={processing} />
      </div>
    </form>
  );
};
