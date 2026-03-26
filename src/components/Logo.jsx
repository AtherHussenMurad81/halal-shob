// import Image from "next/image";
import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Dropdown />
      <Image
        src="/image.png"
        alt="logo"
        width={10}
        height={10}
        className=" w-10 rounded-xl px-3x py-3"
      />
    </div>
  );
};

export default Logo;
