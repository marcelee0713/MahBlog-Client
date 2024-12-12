import { Divider } from "@/components/Divider";
import useProfile from "@/shared/hooks/user-profile";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import React, { Dispatch, SetStateAction, useState } from "react";
import { updateBio } from "../../../api/profile-bio-api";
import { toast } from "sonner";
import useUser from "@/shared/hooks/user";

interface props {
  bioPopUp: boolean;
  setPopUp: Dispatch<SetStateAction<boolean>>;
  bio: string | null;
}

export const BioHandler: React.FC<props> = ({ bio, bioPopUp, setPopUp }) => {
  const { user } = useUser();

  const [processing, setProcessing] = useState(false);

  const { profile, fetchProfile } = useProfile(user);

  const [input, setInput] = useState(profile?.bio ?? "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInput(newValue ?? "");
  };

  const cb: CallbacksInterface = {
    onLoading() {
      setProcessing(true);

      toast.dismiss();
      toast.loading("Loading...");
    },
    onError(err) {
      setProcessing(false);

      toast.dismiss();
      toast.error(err.message);
    },
    onSuccess() {
      setProcessing(false);

      toast.dismiss();
      toast.success("Success!");

      fetchProfile();

      setPopUp(false);
    },
  };

  if (!bioPopUp && bio) {
    return (
      <>
        <Divider />
        {/* This one is going to be replaced by an input. */}
        <div className="text-sm theme-accent-text-color">{bio}</div>
      </>
    );
  }

  if (bioPopUp) {
    return (
      <>
        <Divider />

        <div className="flex flex-col gap-2 text-sm">
          <input
            value={input}
            onChange={handleOnChange}
            disabled={processing}
            maxLength={255}
            type="text"
            className="outline-none bg-transparent theme-border !border-t-0 !border-l-0 !border-r-0 pb-1 theme-accent-text-color"
            placeholder="Enter your bio..."
          />
          <div className="self-end flex gap-2  ">
            <button
              onClick={async () => await updateBio(cb, input)}
              disabled={processing}
            >
              Confirm
            </button>

            <button
              disabled={processing}
              onClick={() => {
                setPopUp(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }

  return;
};
