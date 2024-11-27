"use client";

import useUserStore from "@/shared/model/store";
import { generateDeviceUUID } from "@/shared/api/device.api";
import { ReactNode, useEffect } from "react";
import { SWRConfig } from "swr/_internal";
import ThemeProviderWrapper from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const fetchUser = useUserStore((state) => state.useFetchUser);

  fetchUser();

  useEffect(() => {
    generateDeviceUUID();
  }, []);

  return (
    <SWRConfig>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </SWRConfig>
  );
};

export default GlobalProvider;
