"use client";
import { link } from "@/constants";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Theme from "./Theme";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const Header = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="hidden md:flex justify-center gap-3 md:gap-5 text-xl font-semibold px-3 py-5">
        {link.map((item, index) => (
          <Link
            href={item?.href}
            key={index}
            className={`flex justify-between hover:text-purple-400 tracking-wide transition-transform ${
              pathName === item?.href && "text-purple-400 underline"
            }`}
          >
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
