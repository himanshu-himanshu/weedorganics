import React from "react";
import Image from "next/image";

const BusinessCard = ({ image, text }) => {
  return (
    <div className="shadow-sm bg-white sm:shadow-lg py-8 md:py-12 px-4 flex flex-col items-center justify-center space-y-8 hover:cursor-pointer sm:hover:-translate-y-1 duration-200">
      <div className="flex flex-row space-x-4 justify-center items-center h-1/2">
        <Image src={image} alt="Customer Image" className="w-[100px]" />
      </div>
      <p className="h-1/2 text-center first-letter:font-extrabold first-letter:text-pink-500 tracking-wide text-gray-500">
        {text}
      </p>
    </div>
  );
};

export default BusinessCard;
