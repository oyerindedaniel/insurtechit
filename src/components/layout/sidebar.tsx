"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useGlobalStoreContext } from "../../context";
import { MenuItem } from "./types";

interface Props {
  items: MenuItem[];
}

const SiteSidebar: React.FC<Props> = ({ items }) => {
  const {
    state: {
      UI: { isSidebarOpen },
    },
    dispatch,
  } = useGlobalStoreContext();
  const pathname = usePathname();

  const handleSetSideBarChange = useCallback(
    (payload: boolean) => {
      dispatch({ type: "SET_SIDEBAR", payload });
    },
    [dispatch]
  );

  useEffect(() => {
    handleSetSideBarChange(false);
  }, [handleSetSideBarChange, pathname]);

  return (
    <div>
      {" "}
      <aside
        className={cn(
          "fixed top-0 right-0 w-screen h-screen transition-all duration-300 md:hidden z-10 bg-white",
          isSidebarOpen
            ? "translate-x-0 opacity-1"
            : "-translate-x-full opacity-0"
        )}
      >
        <ul className="flex justify-center flex-col space-y-10 text-center h-full overflow-hidden text-white items-center text-xl">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                "text-black cursor-pointer",
                pathname === item.link
                  ? "bg-[#cfdfee] font-normal py-2 px-4 rounded-lg transition-all border border-brand"
                  : ""
              )}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SiteSidebar;
