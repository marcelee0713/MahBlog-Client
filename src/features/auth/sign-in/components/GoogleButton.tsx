import React from "react";
import { FcGoogle } from "react-icons/fc";

interface props {
  onClick: () => void;
}

export const GoogleButton: React.FC<props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center theme-border font-medium rounded-xl w-full p-3 gap-2"
    >
      <FcGoogle size={20} />

      <div>Sign in with Google</div>
    </button>
  );
};
