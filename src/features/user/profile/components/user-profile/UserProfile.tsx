"use client";

import React, { useEffect } from "react";
import { ProfileCover } from "./components/ProfileCover";
import { ProfilePicture } from "./components/ProfilePicture";
import { ProfileInformation } from "./components/ProfileInformation";
import useProfileContent from "../../hooks/profile-hooks";
import useProfile from "@/shared/hooks/user-profile";

interface props {
  userId?: string;
}

export const UserProfileContent = ({ userId }: props) => {
  const { profile } = useProfile();

  const { setProfile, setEditable } = useProfileContent(profile, userId);

  useEffect(() => {
    if (!userId || profile?.userId === userId) {
      setProfile(profile);
      setEditable(true);
    }
  }, [profile, userId]);

  // TODO: Do the Update Operations of the Profile Picture, Cover, and Bio.

  return (
    <div className="flex flex-col h-[450px]">
      <ProfileCover />
      <div className="flex min-h-[200px] h-auto px-10 relative">
        <ProfilePicture />
        <ProfileInformation />
      </div>
    </div>
  );
};
