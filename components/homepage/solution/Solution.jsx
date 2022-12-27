import React from "react";

const Solution = ({ title, des, showKnowMore }) => {
  return (
    <div className="w-full lg:w-1/2 py-6 px-2 md:px-4 text-center lg:text-start">
      <p className="text-2xl lg:text-4xl font-bold py-8 text-gray-700">
        {title}
      </p>
      <p className="text-lg md:text-xl tracking-wide text-gray-500 mb-8 text-justify">
        {des}
      </p>
      {showKnowMore && (
        <a
          href="#"
          className="px-6 py-3 border border-pink-500 hover:shadow-lg text-pink-500 hover:bg-pink-500 hover:text-gray-100 duration-200"
        >
          Know More &rarr;
        </a>
      )}
    </div>
  );
};

export default Solution;
