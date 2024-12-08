import { IconButton } from "@/components/IconButton";
import React, { useState } from "react";
import { HiUser, HiMiniKey } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { ChangeName } from "./forms/change-name/ChangeName";
import { FormMode } from "../ts/types/settings-types";
import { ChangePassword } from "./forms/change-password/ChangePass";
import { ChangeEmail } from "./forms/change-email/ChangeEmail";
import useUser from "@/shared/hooks/user";

export const UserSettings = () => {
  const { user } = useUser();

  const [mode, setMode] = useState<FormMode>("NONE");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <div className="font-bold text-2xl">User Settings</div>
        <div className="text-sm">
          You can only change your name, and email for every 90 days, but when
          it comes to passwords.{" "}
          <span className="font-bold">
            You can always change them every time.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <IconButton
          icon={HiUser}
          onClick={() => {
            if (user?.authenticatedAs !== "LOCAL") return;

            if (mode === "NAME") return setMode("NONE");

            setMode("NAME");
          }}
          text="Change Name"
          className={`!justify-start w-fit ${
            mode === "NAME" && "theme-accent"
          }`}
        />
        {mode === "NAME" && <ChangeName />}
        <IconButton
          icon={MdEmail}
          onClick={() => {
            if (user?.authenticatedAs !== "LOCAL") return;

            if (mode === "EMAIL") return setMode("NONE");

            setMode("EMAIL");
          }}
          text="Change Email"
          className={`!justify-start w-fit ${
            mode === "EMAIL" && "theme-accent"
          }`}
        />
        {mode === "EMAIL" && <ChangeEmail />}
        <IconButton
          icon={HiMiniKey}
          onClick={() => {
            if (user?.authenticatedAs !== "LOCAL") return;

            if (mode === "PASSWORD") return setMode("NONE");

            setMode("PASSWORD");
          }}
          text="Change Password"
          className={`!justify-start w-fit ${
            mode === "PASSWORD" && "theme-accent"
          }`}
        />
        {mode === "PASSWORD" && <ChangePassword />}
      </div>

      {user && user.authenticatedAs !== "LOCAL" && (
        <div className="flex flex-col gap-1 text-[13px] theme-accent-text-color">
          <div>
            You can not change anything in User Settings since you authenticated
            through <strong>{user?.authenticatedAs}</strong>.
          </div>
          <div>We are sorry for the inconvenience.</div>
        </div>
      )}
    </div>
  );
};
