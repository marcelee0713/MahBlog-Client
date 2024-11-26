import { Routes } from "@/shared/ts/types/global";

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
};
