"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Never render on server - always return placeholder
  // This ensures identical structure on server and client
  if (typeof window === "undefined" || !mounted) {
    return (
      <div className="relative h-9 w-9 flex items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <Sun 
          className={`h-5 w-5 text-white absolute transition-opacity duration-200 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Moon 
          className={`h-5 w-5 text-gray-900 absolute transition-opacity duration-200 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Button>
  );
}

