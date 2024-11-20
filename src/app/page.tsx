"use client";

import { useTheme } from "next-themes";

export default function Home() {
  return (
    <div className="">
      <div className="h-10 w-10 theme-accent font-openSans ">Hello</div>

      <div className="!bg-red-700 w-4 h-4 font-openSans">HELLO</div>

      <ThemeSwitcher />
    </div>
  );
}

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex space-x-4">
      <button onClick={() => setTheme("light")} className="px-4 py-2">
        Light
      </button>
      <button onClick={() => setTheme("dark")} className="px-4 py-2">
        Dark
      </button>
      <button onClick={() => setTheme("yellow")} className="px-4 py-2">
        Yellow
      </button>
    </div>
  );
};
