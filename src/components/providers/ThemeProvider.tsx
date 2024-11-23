import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "sonner";

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
      <Toaster
        position="top-right"
        toastOptions={{
          className: "theme-background theme-border",
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
