import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalProvider from "@/components/providers/GlobalProvider";

const openSans = localFont({
  src: [
    {
      path: "../../public/fonts/open_sans/OpenSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/open_sans/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
});

const sourceSerif4 = localFont({
  src: [
    {
      path: "../../public/fonts/source_serif_4/SourceSerif4-Bold.ttf",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${openSans.variable} ${sourceSerif4.variable} antialiased h-screen w-full font-openSans`}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
