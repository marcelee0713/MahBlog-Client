import apiUrl from "@/config";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export const GoogleButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`${apiUrl}/user/google`)}
      className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 gap-2 disabled:cursor-not-allowed"
    >
      <FcGoogle size={20} />

      <div>Sign in with Google</div>
    </button>
  );
};
