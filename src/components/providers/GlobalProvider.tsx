"use client";

import useUserStore from "@/shared/model/store";
import { ReactNode } from "react";
import { SWRConfig } from "swr/_internal";
import ThemeProviderWrapper from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const fetchUser = useUserStore((state) => state.useFetchUser);

  fetchUser();

  return (
    <SWRConfig>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </SWRConfig>
  );
};

export default GlobalProvider;
