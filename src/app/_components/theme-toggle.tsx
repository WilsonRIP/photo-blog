"use client";

import * as React from "react";
import { useTheme } from "next-themes";

// Using lucide-react for consistency with layout.tsx
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect runs only on the client, ensuring we have access to the window/document
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // If component is not mounted, render a placeholder to prevent hydration mismatches.
  // The placeholder should have the same dimensions as the final button.
  if (!mounted) {
    // Use a span for slightly better semantics if it's just spacing
    return <span className="inline-flex h-9 w-9 items-center justify-center"></span>;
  }

  // Determine the next theme and corresponding label
  const nextTheme = theme === "light" ? "dark" : "light";
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-blue-600" // Updated focus ring, added transition
      aria-label={label} // Dynamic aria-label
      title={label} // Add title for tooltip-like behavior on hover
    >
      {/* Use lucide-react icons */}
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform rotate-0 dark:rotate-180 duration-300" /> // Added transition to icon
      ) : (
        <Sun className="h-5 w-5 transition-transform rotate-180 dark:rotate-0 duration-300" /> // Added transition to icon
      )}
    </button>
  );
}