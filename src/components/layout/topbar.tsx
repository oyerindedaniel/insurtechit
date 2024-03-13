"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Close, Hamburger } from "@/assets";
import { useGlobalStoreContext } from "@/context";
import { MenuItem } from "./types";

interface HeaderProps {
  items: Array<MenuItem>;
}

const SiteHeader: React.FC<HeaderProps> = ({ items }) => {
  const {
    state: {
      UI: { isSidebarOpen },
    },
    dispatch,
  } = useGlobalStoreContext();

  const pathname = usePathname();
  const router = useRouter();

  const handleToogleSideBarChange = () => {
    dispatch({ type: "TOGGLE_SIDEBAR", payload: !isSidebarOpen });
  };

  return (
    <header className="px-6 lg:px-12 py-4 fixed w-full z-30 bg-transparent">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166155/folder/insurtechit-50.png"
            alt="Insurtechit"
            width={100}
            height={100}
            priority
          />
        </Link>
        <Button
          aria-label={
            isSidebarOpen
              ? "Close sidebar navigation"
              : "Open sidebar navigation"
          }
          className={cn("block md:hidden")}
          size="xs"
          type="button"
          variant="unstyled"
          onClick={handleToogleSideBarChange}
        >
          {isSidebarOpen ? <p>Close</p> : <p>Open</p>}
        </Button>
        <ul className="space-x-10 text-sm hidden md:flex md:items-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                "text-white cursor-pointer relative",
                pathname === item.link ? "font-normal" : ""
              )}
            >
              <Link href={item.link}>{item.name}</Link>
              {pathname === item.link ? (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
