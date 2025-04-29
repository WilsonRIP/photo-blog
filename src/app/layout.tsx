// app/layout.tsx
import "~/styles/globals.css"; // Keep global styles

import type { Metadata } from "next";
// Revert to the original Next.js font integration method
import { Geist } from "next/font/google";
import React from "react";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/app/_components/theme-provider";
// Import the extracted Header component
import { Header } from "~/app/_components/header";


export const metadata: Metadata = {
  title: "Photo Blog",
  description: "A personal photo blog showcasing photography and stories.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Initialize Geist font using the next/font/google method
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Define the CSS variable
});

/*************************************
 * Footer (can remain here or be extracted too)
 *************************************/
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-950"> {/* Increased py */}
      <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PhotoBlog. All rights reserved. • Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}

/*************************************
 * Root Layout
 *************************************/
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply the font variable class to the html tag
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`} suppressHydrationWarning>
      {/* Apply the base font family using the CSS variable */}
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        {/* Remove the extra props that caused the type error */}
        <ThemeProvider>
          <TRPCReactProvider>
            <Header /> {/* Use the imported Header */}
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}