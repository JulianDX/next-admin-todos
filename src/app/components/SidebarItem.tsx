"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface SideBarItemProps {
  icon: React.ReactNode;
  title: string;
  tag: string;
  href: string;
}

const SidebarItem = ({ icon, title, tag, href }: SideBarItemProps) => {
  const path = usePathname().split("/")[2];
  return (
    <li>
      <a
        href={`${href}`}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          path === tag
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : "text-black"
        }`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
