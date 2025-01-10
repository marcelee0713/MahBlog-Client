import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Divider } from "../Divider";
import { UnderLineButton } from "../UnderLineButton";
import { ROUTES } from "@/shared/constants/routes";
import { GoodbyeStateHandler } from "./StateHandler";
import { toast } from "sonner";
import useProfile from "@/shared/hooks/user-profile";
import useUser from "@/shared/hooks/user";
import { deleteOAuthUser } from "@/shared/api/user.api";

export const GoodbyePageContent = () => {
  const params = useSearchParams();

  const token = params.get("token");

  const [state, setState] = useState<"LOADING" | "ERROR">("LOADING");

  const [errMsg, setErrMsg] = useState<string | undefined>();

  const { user, clearUser, toggleFetch } = useUser();
  const { setProfile } = useProfile(user);

  const router = useRouter();

  const cb: CallbacksInterface = {
    onLoading() {
      setState("LOADING");
    },

    onSuccess() {
      toast.dismiss();

      toast.success(`Goodbye, hope to see you come back...`);

      clearUser();

      setProfile(null);

      toggleFetch(false);

      router.push("/landing");
    },

    onError(err) {
      setState("ERROR");

      setErrMsg(err.message);
    },
  };

  useEffect(() => {
    if (token) deleteOAuthUser(cb, token);
    else {
      setState("ERROR");

      setErrMsg("Request token not found. You might have modified the link.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative flex flex-col justify-center gap-5 py-5 px-10 w-[375px] max-w-[420px]">
      <GoodbyeStateHandler state={state} errorMessage={errMsg} />

      <Divider />

      <div className="flex text-sm gap-1 font-bold self-center">
        <div className="font-light">Something went wrong?</div>

        <UnderLineButton
          onClick={() => ROUTES["Report"]}
          text="Send us a report"
        />
      </div>
    </div>
  );
};
