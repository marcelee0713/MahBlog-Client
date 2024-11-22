import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: "light",
        dark: "dark",
        yellow: "yellow-mode",
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
