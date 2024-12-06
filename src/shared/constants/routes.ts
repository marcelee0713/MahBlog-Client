import { Routes } from "@/shared/ts/types/global";
import { FaPencilAlt } from "react-icons/fa";
import { HiUser, HiUserGroup } from "react-icons/hi2";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { IconRoute } from "../ts/interfaces/global";

export const RoutesArr = [
  "Home",
  "LandingPage",
  "Signin",
  "SignUp",
  "About",
  "ForgotPass",
  "ResetPass",
  "Welcome",
  "Report",
  "Write",
  "Notifications",
  "Connections",
  "Profile",
  "Settings",
] as const;

//TODO: Update this regularly.
export const ROUTES: Record<Routes, string> = {
  Home: "/",
  LandingPage: "/landing",
  Signin: "/sign-in",
  SignUp: "/sign-up",
  About: "/about",
  ForgotPass: "/forgot-password",
  ResetPass: "/reset-password",
  Welcome: "/welcome",
  Report: "/report",
  Write: "/write",
  Notifications: "/notifications",
  Connections: "/connections",
  Profile: "/profile",
  Settings: "/settings",
};

export const USER_POP_UP_ROUTES: IconRoute[] = [
  {
    icon: HiUser,
    route: "Profile",
    text: "Profile",
  },
  {
    icon: IoIosSettings,
    route: "Settings",
    text: "Settings",
  },
];

export const QUICK_ACTION_ROUTES: IconRoute[] = [
  {
    icon: FaPencilAlt,
    route: "Write",
    text: "Write",
  },
  {
    icon: HiUserGroup,
    route: "Connections",
    text: "Connections",
  },
  {
    icon: IoIosNotifications,
    route: "Notifications",
    text: "Notifications",
  },
];
