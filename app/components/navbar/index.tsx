"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/components/custom/Logo";
import { MenuIcon } from "lucide-react";
import NavLink from "./link";
import GetCatalogueBlock from "./featured-blocs";
import { getRoute } from "@/lib/getRoute";

let navItems: { title: string; href: string }[] = [];

if (process.env.NODE_ENV === "production") {
  navItems = [
    { title: "Home", href: "https://altraders.in/" },
    { title: "About", href: "https://altraders.in/about" },
    { title: "Brand", href: "https://bullsbrand.altraders.in" },
    { title: "Store", href: "https://altraders.in/store" },
  ];
} else {
  navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Brand", href: "/brand" },
    { title: "Store", href: "/store" },
  ];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/30 backdrop-blur-xl z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo logoText="AL Traders" />
          <nav className="hidden md:flex justify-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.title} title={item.title} href={item.href} />
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button asChild>
                <Link href={getRoute("/contact")}>Contact</Link>
              </Button>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Logo
                      className="text-secondary text-3xl"
                      logoText="AL Traders"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col h-full justify-between pb-10">
                  <div className="flex flex-col justify-between space-y-4 pt-10">
                    {navItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="font-medium transition-colors hover:text-primary text-xl py-2 border-b border-slate-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div
                    id="featured"
                    className="grow py-4 flex flex-col justify-end"
                  >
                    <GetCatalogueBlock />
                  </div>
                  <div className="flex flex-col justify-between space-y-4 pb-5">
                    <Button asChild>
                      <Link
                        href={getRoute("/contact")}
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
