import { IconButton } from "@/components/IconButton";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { TiFlag } from "react-icons/ti";

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
  return (
    <div className="flex gap-2 justify-between w-full">
      <div className="font-bold text-2xl">{fullName}</div>
      <div className="relative">
        <IoIosMore size={20} className="cursor-pointer" />

        <div className="absolute flex flex-col w-[120px] gap-2 p-2 theme-background theme-border right-0 shadow-lg text-sm rounded-lg text-end z-20">
          <IconButton icon={MdEdit} text="Edit bio" onClick={onClickEdit} />
          <IconButton
            icon={TiFlag}
            text="Report user"
            onClick={onClickReportUser}
          />
        </div>
      </div>
    </div>
  );
};
