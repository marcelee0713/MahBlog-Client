import React from "react";
import { MenuRoutes } from "./RightPanelRoutes";
import { UserButton } from "./UserButton";
import useUser from "@/shared/hooks/user";
import useProfile from "@/shared/hooks/user-profile";
import { IconRouteButton } from "@/components/IconButton";
import { HiOutlineLogin } from "react-icons/hi";

export const QuickActionRightMenu = () => {
  const { user, isLoading } = useUser();
  const { profile } = useProfile(user);

  if (!user && !isLoading)
    return (
      <IconRouteButton icon={HiOutlineLogin} route="Signin" text="Sign In" />
    );

  return (
    <div className="flex gap-6 items-center">
      <MenuRoutes profile={profile} />
      <UserButton profile={profile} />
    </div>
  );
};
