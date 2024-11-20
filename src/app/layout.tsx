import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviderWrapper from "@/providers/ThemeProvider";

const openSans = localFont({
  src: [
    {
      path: "./fonts/open_sans/OpenSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/open_sans/OpenSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/open_sans/OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/open_sans/OpenSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/open_sans/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/open_sans/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/open_sans/OpenSans-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/open_sans/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
});

const sourceSerif4 = localFont({
  src: [
    {
      path: "./fonts/source_serif_4/SourceSerif4-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "MahBlog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${sourceSerif4.variable} antialiased theme-background`}
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
