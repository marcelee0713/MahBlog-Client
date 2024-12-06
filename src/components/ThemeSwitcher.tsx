import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
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
