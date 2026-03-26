"use client";
import { MdMenu } from "react-icons/md";
import React from "react";
import { link } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dropdown = () => {
  const pathName = usePathname();
  return (
    <div className="dropdown flex md:hidden dropdown-hover">
      {/* Trigger Button */}
      <label tabIndex={0} className="btn m-1">
        <MdMenu size={24} />
      </label>

      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {link.map((item) => (
          <li
            className={`flex justify-between hover:text-purple-400 tracking-wide transition-transform ${
              pathName === item?.href && "text-purple-400 underline"
            }`}
            key={item.name}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
