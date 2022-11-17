import React from "react";
import Image from "next/image";

const BusinessCard = ({ image, text }) => {
  return (
    <div className="border border-gray-600 py-8 md:py-12 px-4 flex flex-col items-center justify-center space-y-8 w-1/4">
      <div className="flex flex-row space-x-4 justify-center items-center h-1/2">
        <Image src={image} alt="Customer Image" className="w-[100px]" />
      </div>
      <p className="h-1/2 text-center first-letter:font-extrabold first-letter:text-pink-500 tracking-wide">
        {text}
      </p>
    </div>
  );
};

export default BusinessCard;
