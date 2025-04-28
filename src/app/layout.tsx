// app/layout.tsx
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/app/_components/theme-provider";
import { ThemeToggle } from "~/app/_components/theme-toggle";


export const metadata: Metadata = {
  title: "Photo Blog",
  description: "A personal photo blog showcasing photography and stories.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Define navigation items as a constant
const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/*************************************
 * Header
 *************************************/

// Component that renders just the navigation links
function NavLinksContent() {
  const linkClasses = "text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400";
  return (
    <>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={linkClasses}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

// Component to wrap ThemeToggle for mobile styling
function MobileThemeToggleItem() {
    return (
        // Added padding top to separate from links in mobile view
        <span className="block pt-4">
             <ThemeToggle />
        </span>
    )
}


function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur dark:border-gray-700/60 dark:bg-gray-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          Photo<span className="text-blue-600 dark:text-blue-400">Blog</span>
        </Link>

        {/* Mobile hamburger toggle - uses peer-checked utility for toggling state */}
        <input id="nav-toggle" type="checkbox" className="peer sr-only" />
        <label
          htmlFor="nav-toggle"
          className="flex cursor-pointer items-center rounded-md p-2 ring-blue-500 focus:outline-none focus:ring-2 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 text-gray-800 peer-checked:hidden dark:text-gray-200" />
          <X className="hidden h-6 w-6 text-gray-800 peer-checked:block dark:text-gray-200" />
        </label>

        {/* Desktop nav and toggle container */}
        {/* This div uses flex to lay out the nav links and the theme toggle side-by-side on desktop */}
        <div className="hidden md:flex items-center gap-6">
            {/* Desktop Nav Links - Wrapped in nav for semantics */}
            <nav aria-label="Primary navigation" className="flex items-center gap-6"> {/* flex and gap apply to the links */}
                <NavLinksContent />
            </nav>
            {/* Theme toggle - Placed directly next to the nav */}
            <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {/* This nav contains the mobile links and the theme toggle stacked vertically */}
      <nav className="peer-checked:max-h-[400px] peer-checked:opacity-100 max-h-0 overflow-hidden bg-white px-4 opacity-0 transition-all duration-300 ease-in-out dark:bg-gray-900 md:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col space-y-1 py-4">
          <NavLinksContent />
          <MobileThemeToggleItem />
        </div>
      </nav>
    </header>
  );
}

/*************************************
 * Footer
 *************************************/
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-700 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PhotoBlog. All rights reserved. • Built with Next.js &amp; Tailwind CSS
      </div>
    </footer>
  );
}

/*************************************
 * Root Layout
 *************************************/
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          <TRPCReactProvider>
            <Header />
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