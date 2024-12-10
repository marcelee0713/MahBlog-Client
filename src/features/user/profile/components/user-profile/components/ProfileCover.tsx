import defaultCover from "../../../../../../../public/svg/default-cover.svg";
import React from "react";
import Image from "next/image";
import useProfileContent from "../../../hooks/profile-hooks";

export const ProfileCover = () => {
  const { profile, editable } = useProfileContent();

  if (!profile) {
    return (
      <div className="relative flex-1 theme-accent rounded-lg -z-10 animate-pulse"></div>
    );
  }

  return (
    <div className="relative flex-1 ">
      <Image
        src={profile.profileCover ?? defaultCover}
        fill
        style={{ objectFit: "cover" }}
        alt="Profile Cover"
        className="rounded-lg -z-10"
      />
    </div>
  );
};
