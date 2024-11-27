import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export const ForgotPassSuccessState = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <FaCircleCheck size={100} />

      <div className="flex flex-col gap-1 text-center">
        <div className="font-bold">Success!</div>
        <div className="text-sm">
          We have sent you a link to your email address for resetting your
          password
        </div>
      </div>
    </div>
  );
};
