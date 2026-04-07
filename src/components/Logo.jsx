// import Image from "next/image";
import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Dropdown />
      <Link href={"/"}>
        <Image
          src="/image.png"
          alt="logo"
          width={10}
          height={10}
          className=" w-10 rounded-xl px-3x py-3"
        />
      </Link>
    </div>
  );
};

export default Logo;
