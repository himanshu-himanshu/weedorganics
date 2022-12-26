import React from "react";
import Image from "next/image";

import image from "../../public/brand_banner.png";

const Banner = () => {
  return (
    <div className="relative h-[55vh] bg-red-200">
      <Image src={image} alt="Customer Image" className="w-full h-full" />
      <div className="absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-b from-[#0E0E0E]"></div>
      <h1 className="absolute top-[200px] left-[70px] text-gray-100 z-30 text-3xl md:text-4xl lg:text-6xl font-Raleway bg-black/50 p-4">
        Brand Solutions
      </h1>
    </div>
  );
};

export default Banner;
