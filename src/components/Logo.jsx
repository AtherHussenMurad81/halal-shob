// import Image from "next/image";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/image.png"
        alt="logo"
        width={10}
        height={10}
        className="h-10 w-10 rounded-xl"
      />
    </div>
  );
};

export default Logo;
