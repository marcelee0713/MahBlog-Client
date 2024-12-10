import { Divider } from "@/components/Divider";
import React, { useState } from "react";
import { ProfileNameAndOption } from "./ProfileNameAndOption";
import useProfileContent from "../../../hooks/profile-hooks";

export const ProfileInformation = () => {
  const { profile, editable } = useProfileContent();

  const [bioPopUp, setBioPopUp] = useState(false);
  const [reportUserPopUp, setReportPopUp] = useState(false);

  if (!profile) {
    return (
      <div className="flex flex-col gap-[5px] w-full ml-[220px] my-[10px]">
        <div className="w-[300px] h-[30px] theme-accent rounded-lg animate-pulse"></div>
        <div className="w-[100px] h-[20px] theme-accent rounded-lg animate-pulse"></div>
        <Divider />
        <div className="w-[150px] h-[20px] theme-accent rounded-lg animate-pulse"></div>
      </div>
    );
  }

  const fullName = [profile.firstName, profile.middleName, profile.lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col gap-[5px] w-full ml-[220px] my-[10px]">
      <ProfileNameAndOption
        fullName={fullName}
        onClickEdit={() => setBioPopUp(true)}
        onClickReportUser={() => setReportPopUp(true)}
      />

      {/*TODO: Create a UserProfileConnectionsState and put the count here. */}
      <div className="font-light text-sm">6 connections</div>

      {/*TODO: When the user clicked the onClickEdit, it will either replace the current 
      component if a bio is present, and if the bio is not, then just place the BioForm. */}
      {profile.bio && (
        <>
          <Divider />
          {/* This one is going to be replaced by an input. */}
          <div className="text-sm">{profile.bio}</div>
        </>
      )}
    </div>
  );
};
