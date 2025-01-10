import React from "react";
import { EmailVerifLoadingState } from "./states/LoadingState";
import { EmailVerifErrorState } from "./states/ErrorState";

interface props {
  state: "LOADING" | "ERROR";
  errorMessage?: string;
}

export const GoodbyeStateHandler = ({ state, errorMessage }: props) => {
  switch (state) {
    case "LOADING":
      return <EmailVerifLoadingState />;

    case "ERROR":
      return <EmailVerifErrorState message={errorMessage} />;

    default:
      return <div></div>;
  }
};
