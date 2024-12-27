import React, { useState } from "react";
import defaultPfp from "../../../../../../../public/svg/default-pfp.svg";
import Image from "next/image";
import useProfileContent from "../../../hooks/profile-hooks";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { toast } from "sonner";
import useProfile from "@/shared/hooks/user-profile";
import {
  deleteProfilePic,
  updateProfilePic,
} from "../../../api/profile-picture-api";
import useUser from "@/shared/hooks/user";
import { ImageOperationHandler } from "./ImageOperationHandler";

export const ProfilePicture = () => {
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
      <div className="rounded-full profile-pfp-border theme-accent absolute h-[200px] w-[200px] bottom-[60px] animate-pulse"></div>
    );
  }

  return (
    <>
      <div className="absolute h-[200px] w-[200px] bottom-[60px]">
        <ImageOperationHandler
          id="pfp"
          cover={profile.profilePicture}
          editable={editable}
          onUpload={async (file: File) => await updateProfilePic(file, cb)}
          onRemove={async () =>
            await deleteProfilePic(profile.profilePicture, cb)
          }
          className="!absolute h-[200px] !w-[200px] !rounded-full !z-20"
          processing={processing}
        />
        <Image
          src={profile.profilePicture ?? defaultPfp}
          alt="Profile Picture"
          fill
          className="rounded-full profile-pfp-border"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />
      </div>
    </>
  );
};
