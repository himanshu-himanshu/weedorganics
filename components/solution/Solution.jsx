import React from "react";

const Solution = ({ title, des }) => {
  return (
    <div className="w-full lg:w-1/2 py-6 px-2 md:px-4 text-center lg:text-start">
      <p className="text-3xl lg:text-4xl font-semibold py-8 text-gray-700">
        {title}
      </p>
      <p className="text-lg md:text-xl tracking-wide text-gray-600 mb-8 text-justify">
        {des}
      </p>
      <a
        href="#"
        className="px-6 py-3 border border-gray-400 hover:shadow-lg hover:bg-pink-500 hover:text-gray-100 hover:border-pink-500 duration-200"
      >
        Know More &rarr;
      </a>
    </div>
  );
};

export default Solution;
