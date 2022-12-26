import React from "react";
import Image from "next/image";

const Testimonial = ({ name, title, src, text }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-3 font-Montserrat">
      <Image src={src} alt="Customer Image" className="w-[200px]" />
      <h1>{name}</h1>
      <p>{title}</p>
      <span className="font-Alata text-lg text-center max-w-4xl py-4">
        {text}
      </span>
    </div>
  );
};

export default Testimonial;
