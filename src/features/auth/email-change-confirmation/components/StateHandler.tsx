import React from "react";
import { EmailChangeLoadingState } from "./states/LoadingState";
import { EmailChangeSuccessState } from "./states/SuccessState";
import { EmailChangeErrorState } from "./states/ErrorState";

interface props {
  state: "LOADING" | "ERROR" | "SUCCESS";
  errorMessage?: string;
}

export const EmailChangeStateHandler = ({ state, errorMessage }: props) => {
  switch (state) {
    case "LOADING":
      return <EmailChangeLoadingState />;

    case "SUCCESS":
      return <EmailChangeSuccessState />;

    case "ERROR":
      return <EmailChangeErrorState message={errorMessage} />;

    default:
      return <div></div>;
  }
};
