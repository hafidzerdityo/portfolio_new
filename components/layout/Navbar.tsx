"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Github } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./DarkMode";

const primaryNavItems = [
  { title: "About", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "Project", href: "/project" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-1/3 flex items-center justify-start gap-2">
            <ModeToggle />
          </div>

          <NavigationMenu
            viewport={false}
            className="w-1/3 flex justify-center"
          >
            <NavigationMenuList className="flex gap-4">
              {primaryNavItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} ${
                        isActive ? "bg-accent text-accent-foreground" : ""
                      }`}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-1/3 flex items-center justify-end gap-2">
            <Link
              href="https://www.linkedin.com/in/muhammad-hafidz-erdityo-024a1a206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>

            <Link
              href="https://github.com/hafidzerdityo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
