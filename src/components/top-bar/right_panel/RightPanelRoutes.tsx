import React from "react";
import { UserProfile } from "@/shared/ts/interfaces/user.interface";
import { IconRouteButton } from "@/components/IconRouteButton";
import { QUICK_ACTION_ROUTES } from "@/shared/constants/routes";

interface props {
  profile: UserProfile | null;
}

export const MenuRoutes = ({ profile }: props) => {
  return (
    profile && (
      <div className="flex items-center gap-5">
        {QUICK_ACTION_ROUTES.map((val, i) => {
          return <IconRouteButton {...val} key={i} />;
        })}
      </div>
    )
  );
};
