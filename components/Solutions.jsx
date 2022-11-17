import React from "react";
import Image from "next/image";
import image from "../assets/image1.svg";
import image2 from "../assets/image2.svg";

const Solutions = () => {
  return (
    <div className="w-full h-full bg-gray-100 py-12">
      <div class="container max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-5xl lg:text-6xl font-Gruppo font-bold text-primary text-center underline--magical">
            What We Provide
          </h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center py-6 md:py-8 lg:py-12 font-Montserrat">
          <div className="w-full lg:w-1/2 py-6 px-2 md:px-4 text-center lg:text-start">
            <p className="text-3xl lg:text-4xl font-semibold py-8 text-gray-700 relative ">
              Drive Retail Traffic
            </p>
            <p className="text-lg md:text-xl tracking-wide text-gray-600 mb-8 text-justify">
              Reach customers looking for organic cannabis products and where to
              purchase them on our web or mobile apps. Expand your digital
              presence with our retail solutions such as store listing, menu,
              deals and more. Connect with customers and drive in store and
              online organic cannabis sales.
            </p>
            <a
              href="#"
              className="px-6 py-3 border border-gray-600 hover:shadow-lg hover:bg-pink-500 hover:text-gray-100 hover:border-pink-500 hover:-translate-y-1 duration-200"
            >
              Know More
            </a>
          </div>
          <div className="w-full p-2 lg:w-1/2 flex justify-center lg:justify-end items-center">
            <Image src={image} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center py-6 md:py-8 lg:py-12 font-Montserrat">
          <div className="w-full p-2 lg:w-1/2 flex justify-center lg:justify-start items-center">
            <Image src={image2} alt="Customer Image" className="w-[500px]" />
          </div>
          <div className="w-full lg:w-1/2 py-6 px-2 md:px-4 text-center lg:text-start">
            <p className="text-3xl lg:text-4xl font-semibold py-8 text-gray-700">
              Grow Brand Awareness
            </p>
            <p className="text-lg md:text-xl tracking-wide text-gray-600 mb-8 text-justify">
              Showcase your brand to customers through brand listing, followers,
              likes, product reviews, push notifications and more. Our brand
              solutions amplify brand awareness and helps customers discover
              organic cannabis products at retailers near them using our web and
              mobile apps.
            </p>
            <a
              href="#"
              className="px-6 py-3 border border-gray-600 hover:shadow-lg hover:bg-pink-500 hover:text-gray-100 hover:border-pink-500 hover:-translate-y-1 duration-200"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
