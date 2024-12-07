import { IconButton } from "@/components/IconButton";
import React, { useState } from "react";
import { HiUserRemove } from "react-icons/hi";
import { DeleteUser } from "./forms/delete-user/DeleteUser";

export const DangerZone = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col gap-3 text-red-400">
      <div className="flex flex-col gap-1">
        <div className="font-bold text-2xl">Danger Zone</div>
        <div className="text-sm">
          There is no going back on doing this, all of your blogs, drafts, and
          etc... will be
          <span className="font-bold"> gone.</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-fit">
        <IconButton
          icon={HiUserRemove}
          onClick={() => setClicked(!clicked)}
          text="Delete Account"
          className={`!justify-start ${clicked && "theme-accent"}`}
        />
      </div>
      {clicked && <DeleteUser />}
    </div>
  );
};
