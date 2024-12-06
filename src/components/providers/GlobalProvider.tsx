"use client";

import { generateDeviceUUID } from "@/shared/api/device.api";
import { ReactNode, useEffect } from "react";
import { SWRConfig } from "swr/_internal";
import ThemeProviderWrapper from "./ThemeProvider";
import useUser from "@/shared/hooks/user";

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  useUser();

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
