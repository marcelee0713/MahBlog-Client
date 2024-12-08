import React from "react";
import { ProfileCover } from "./components/ProfileCover";
import { ProfilePicture } from "./components/ProfilePicture";
import { ProfileInformation } from "./components/ProfileInformation";

export const UserProfileContent = () => {
  //TODO: Create a UserProfileContentState and Store it to (Zustand)
  // The following properties is the same as UserProfileState, but with isEditable property
  // So we know if the user is viewing the same profile.

  //TODO: Change the structure of the /profile into /profile/[userId]
  // and whenever the user tries to redirect himself into /profile, redirect him to /profile/userId <- currentlyLoggedIn
  // Just check out next.config.js

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
