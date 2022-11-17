import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div class="relative w-full h-[100vh] z-10 banner font-Montserrat overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/80"></div>
      <div class="container max-w-6xl mx-auto flex flex-col justify-center h-full px-4 md:px-8 space-y-4 ">
        <p class="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold capitalize">
          <span className="text-pink-700"> Connect customers</span> with organic
          cannabis
        </p>
        <p class="text-gray-300 text-md sm:text-lg lg:text-xl max-w-3xl py-4 mb-8 tracking-wide md:tracking-wider">
          Drive in-store and online sales by engaging with customers looking for
          organic cannabis products. WeedOrganic offers advertising solutions to
          cannabis brands, retailers and clinics. Connect with customers to grow
          your business either on the computer or on your mobile device with our
          apps.
        </p>
        <div class="flex items-center space-x-6 md:space-x-8 tracking-wider text-sm md:text-md">
          <a href="#projects">
            <button class="px-6 md:px-8 py-4 border border-secondary text-secondary hover:bg-green-600 hover:border-green-600 hover:text-white hover:shadow-lg hover:-translate-y-1 duration-200 font-semibold">
              Get Started
            </button>
          </a>
          <a href="#projects">
            <button class="px-6 md:px-8 py-4 border border-secondary text-secondary hover:bg-pink-500 hover:border-pink-500 hover:text-white hover:shadow-lg hover:-translate-y-1 duration-200 font-semibold">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
