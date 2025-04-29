// app/_components/header.tsx
"use client"; // Needed for useState and usePathname hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import { ThemeToggle } from "~/app/_components/theme-toggle";

// Define navigation items as a constant
const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Component that renders navigation links with active state
function NavLinksContent() {
  const currentPath = usePathname();
  const baseLinkClasses = "text-sm font-medium transition-colors duration-200 rounded-md px-3 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950";
  const inactiveLinkClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800";
  const activeLinkClasses = "font-semibold text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"; // Active link styling

  return (
    <>
      {navItems.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            aria-current={isActive ? "page" : undefined} // Accessibility for active link
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

// Component to wrap ThemeToggle for mobile styling
function MobileThemeToggleItem() {
    return (
        // Added padding top to separate from links in mobile view
        <div className="block border-t border-gray-200/70 pt-4 mt-4 dark:border-gray-700/60">
             <ThemeToggle />
        </div>
    )
}

// Main Header Component
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur dark:border-gray-700/60 dark:bg-gray-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on brand click
        >
          Photo<span className="text-blue-600 dark:text-blue-400">Blog</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex cursor-pointer items-center rounded-md p-2 text-gray-800 ring-blue-500 focus:outline-none focus-visible:ring-2 dark:text-gray-200 md:hidden"
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop nav and toggle container */}
        <div className="hidden md:flex items-center gap-6">
          {/* Desktop Nav Links - Wrapped in nav for semantics */}
          <nav aria-label="Primary navigation" className="flex items-center gap-2"> {/* Reduced gap slightly */}
              <NavLinksContent />
          </nav>
          {/* Theme toggle - Placed directly next to the nav */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {/* Uses conditional rendering and transitions for smooth open/close */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-gray-900`}
      >
        <nav className="px-4 pb-4 pt-2" aria-label="Mobile navigation">
          <div className="flex flex-col space-y-2" onClick={(e) => {
            // Close menu if a link is clicked (check if target is an anchor)
             if (e.target instanceof HTMLAnchorElement && e.target.href) {
               setIsMobileMenuOpen(false);
             }
          }}>
             <NavLinksContent />
             <MobileThemeToggleItem />
          </div>
        </nav>
      </div>
    </header>
  );
}