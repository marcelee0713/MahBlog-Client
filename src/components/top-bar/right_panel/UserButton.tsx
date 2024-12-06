import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { UserProfile } from "@/shared/ts/interfaces/user.interface";
import { UserPopUp } from "./UserPopUp";

interface props {
  profile: UserProfile | null;
}

export const UserButton = ({ profile }: props) => {
  const [popUp, setPopUp] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  if (profile) {
    return (
      <div ref={buttonRef} className="relative rounded-full">
        {profile.profilePicture ? (
          <Image
            src={profile.profilePicture}
            alt={`${profile.firstName}'s pfp`}
            width={40}
            height={40}
            quality={100}
            className="rounded-full cursor-pointer"
            onClick={() => setPopUp(!popUp)}
          />
        ) : (
          <FaCircleUser
            size={40}
            className="cursor-pointer"
            onClick={() => setPopUp(!popUp)}
          />
        )}
        {popUp && <UserPopUp setPopUp={setPopUp} parentRef={buttonRef} />}
      </div>
    );
  }

  return (
    <div className="h-[40px] w-[40px] rounded-full theme-accent animate-pulse"></div>
  );
};
