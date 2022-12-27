import React from "react";
import Image from "next/image";

const Banner = ({ src, title }) => {
  return (
    <div className="relative h-[55vh] bg-red-200">
      <Image src={src} alt="Image" className="w-full h-full" />
      <div className="absolute w-full h-[250px] top-0 left-0 z-20 bg-gradient-to-b from-[#0E0E0E]"></div>
      <h1 className="absolute top-[200px] left-[70px] text-gray-100 z-30 text-3xl md:text-4xl lg:text-6xl font-Raleway bg-black/50 p-4">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
