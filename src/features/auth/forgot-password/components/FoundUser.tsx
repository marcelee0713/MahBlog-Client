import React from "react";
import { FoundUserData } from "../ts/interface/forgot-pass-interface";
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { Button } from "@/components/Button";

interface props {
  processing: boolean;
  foundUser: FoundUserData | null;
  onYes: () => void;
  onNo: () => void;
}

export const FoundUser = ({ foundUser, onYes, onNo, processing }: props) => {
  const fullName = [
    foundUser?.firstName,
    foundUser?.middleName,
    foundUser?.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    foundUser && (
      <div className="flex flex-col items-center gap-5">
        <div className="font-bold text-center">Is this you?</div>

        {foundUser.profilePicture ? (
          <div className="relative h-[150px] w-[150px]">
            <Image
              src={foundUser.profilePicture}
              alt="pfp"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        ) : (
          <FaCircleUser size={150} />
        )}
        <div className="flex flex-col gap-1 items-center">
          <div className="font-bold text-lg">{fullName}</div>
          <div className="text-sm">{foundUser.email}</div>
        </div>

        <div className="flex gap-2 w-full">
          <Button text="Yes" onClick={onYes} disabled={processing} />
          <Button text="No" onClick={onNo} disabled={processing} />
        </div>
      </div>
    )
  );
};
