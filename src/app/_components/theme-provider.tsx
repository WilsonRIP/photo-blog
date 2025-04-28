"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// Correctly import the type if needed, or often it can be inferred or imported differently
// Let's rely on inference or potentially import later if specific props are needed directly.
// For now, we can simplify the props typing slightly.

// Define props based on common use cases with next-themes
interface CustomThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
  // Add other props from ThemeProviderProps as needed
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  // Set attribute="class" directly for Tailwind CSS compatibility
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 