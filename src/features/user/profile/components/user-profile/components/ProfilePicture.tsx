import React from "react";
import defaultPfp from "../../../../../../../public/svg/default-pfp.svg";
import useProfile from "@/shared/hooks/user-profile";
import Image from "next/image";

export const ProfilePicture = () => {
  const { profile } = useProfile(null);

  if (!profile) {
    return (
      <div className="rounded-full profile-pfp-border theme-accent absolute h-[200px] w-[200px] bottom-[60px] animate-pulse"></div>
    );
  }

  return (
    <div className="absolute h-[200px] w-[200px] bottom-[60px]">
      <Image
        src={profile?.profilePicture ?? defaultPfp}
        alt="Profile Picture"
        fill
        className="rounded-full profile-pfp-border"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
      />
    </div>
  );
};