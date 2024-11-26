import React from "react";
import { EmailVerifLoadingState } from "./states/LoadingState";
import { EmaiLVerifSuccessState } from "./states/SuccessState";
import { EmailVerifErrorState } from "./states/ErrorState";

interface props {
  state: "LOADING" | "ERROR" | "SUCCESS";
  errorMessage?: string;
}

export const EmailVerifStateHandler = ({ state, errorMessage }: props) => {
  switch (state) {
    case "LOADING":
      return <EmailVerifLoadingState />;

    case "SUCCESS":
      return <EmaiLVerifSuccessState />;

    case "ERROR":
      return <EmailVerifErrorState message={errorMessage} />;

    default:
      return <div></div>;
  }
};
