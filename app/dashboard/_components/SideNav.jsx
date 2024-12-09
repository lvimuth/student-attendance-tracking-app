"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const path = usePathname();
  const { user } = useKindeBrowserClient();
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: GraduationCap,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={"/logo.svg"} width={180} height={50} alt="" />
      <hr className="my-5" />
      {menuList.map((menu, index) => (
        <div key={index} className="w-full">
          <Link href={menu.path}>
            <h2
              className={`flex gap-3 text-md p-4 items-center text-slate-500 hover:bg-primary cursor-pointer rounded-lg my-5 hover:text-white ${
                path == menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        </div>
      ))}
      <div className="flex gap-2 items-center bottom-5 fixed p-2">
        <Image
          src={user?.picture}
          width={35}
          height={35}
          alt=""
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-xs text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
