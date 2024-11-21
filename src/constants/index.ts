import { Routes } from "@/types";

export const RoutesArr = [
  "Home",
  "LandingPage",
  "Signin",
  "SignUp",
  "About",
  "ResetPass",
] as const;

//TODO: Update this regularly.
export const ROUTES: Record<Routes, string> = {
  Home: "/",
  LandingPage: "/landing",
  Signin: "/sign-in",
  SignUp: "/sign-up",
  About: "/about",
  ResetPass: "/reset-password",
};
