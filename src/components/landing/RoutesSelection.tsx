import { ROUTES } from "@/constants";
import React from "react";
import { UnderLineButton } from "../UnderLineButton";
import { useRouter } from "next/navigation";

interface props {
  animate: boolean;
}

export const RoutesSelection: React.FC<props> = ({ animate }) => {
  const router = useRouter();

  return (
    <div
      className={`flex gap-2 justify-around w-full items-center font-bold ${
        animate ? "animate-animfadeAbove visible" : "invisible"
      }`}
    >
      <UnderLineButton
        onClick={() => router.push(ROUTES["Home"])}
        text="Read"
      />

      <UnderLineButton
        onClick={() => router.push(ROUTES["Signin"])}
        text="Sign in"
      />

      <UnderLineButton
        onClick={() => router.push(ROUTES["About"])}
        text="About"
      />
    </div>
  );
};
