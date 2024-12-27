import defaultCover from "../../../../../../../public/svg/default-cover.svg";
import React, { useState } from "react";
import Image from "next/image";
import useProfileContent from "../../../hooks/profile-hooks";
import useProfile from "@/shared/hooks/user-profile";
import useUser from "@/shared/hooks/user";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { toast } from "sonner";
import {
  deleteProfileCover,
  updateProfileCover,
} from "../../../api/profile-cover-api";
import { ImageOperationHandler } from "./ImageOperationHandler";

export const ProfileCover = () => {
  const [processing, setProcessing] = useState(false);

  const { user } = useUser();

  const { profile: currentProfile, fetchProfile } = useProfile(user);

  const { profile, editable } = useProfileContent(currentProfile);

  const cb: CallbacksInterface = {
    onLoading() {
      toast.dismiss();
      toast.loading("Loading...");

      setProcessing(true);
    },
    onError(err) {
      toast.dismiss();
      toast.error(err.message);

      setProcessing(false);
    },
    onSuccess() {
      toast.dismiss();
      toast.success("Success!");

      fetchProfile();

      setProcessing(false);
    },
  };

  if (!profile) {
    return (
      <div className="relative flex-1 theme-accent rounded-lg -z-10 animate-pulse"></div>
    );
  }

  return (
    <div className="relative flex-1 ">
      <ImageOperationHandler
        id="cover"
        cover={profile.profileCover}
        editable={editable}
        onUpload={async (file: File) => await updateProfileCover(file, cb)}
        onRemove={async () =>
          await deleteProfileCover(profile.profileCover, cb)
        }
        processing={processing}
      />

      <Image
        src={profile.profileCover ?? defaultCover}
        fill
        style={{ objectFit: "cover" }}
        alt="Profile Cover"
        className="rounded-lg -z-10"
        quality={100}
      />
    </div>
  );
};
