import { IconButton } from "@/components/IconButton";
import React, { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { TiFlag } from "react-icons/ti";
import useProfileContent from "../../../hooks/profile-hooks";

interface props {
  fullName: string;
  onClickEdit: () => void;
  onClickReportUser: () => void;
}

export const ProfileNameAndOption: React.FC<props> = ({
  fullName,
  onClickEdit,
  onClickReportUser,
}) => {
  const { editable } = useProfileContent();
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="flex gap-2 justify-between w-full">
      <div className="font-bold text-2xl">{fullName}</div>
      <div className="relative">
        <IoIosMore
          onClick={() => setPopUp(!popUp)}
          size={20}
          className="cursor-pointer"
        />

        {popUp && (
          <div className="absolute flex flex-col w-[120px] gap-2 p-2 theme-background theme-border right-0 shadow-lg text-sm rounded-lg text-end z-20">
            {editable && (
              <IconButton
                icon={MdEdit}
                text="Edit bio"
                onClick={() => {
                  onClickEdit();
                  setPopUp(false);
                }}
              />
            )}
            {!editable && (
              <IconButton
                icon={TiFlag}
                text="Report user"
                onClick={() => {
                  onClickReportUser();
                  setPopUp(false);
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
