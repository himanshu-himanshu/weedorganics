import React from "react";

const Logo = () => {
  return (
    <a
      href="http://localhost:3000/"
      className="text-2xl md:text-4xl uppercase font-extrabold tracking-wider hover:cursor-pointer font-Borui md:p-2"
    >
      <img
        src="https://weedorganic.biz/image/weed-organicbiz-logo.png"
        alt=""
        className="h-8 md:h-12 w-full"
      />
    </a>
  );
};

export default Logo;
