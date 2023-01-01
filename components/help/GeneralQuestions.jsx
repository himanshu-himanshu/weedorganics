import React from "react";

const GeneralQuestions = ({ handleFAQ }) => {
  return (
    <div className="w-full h-full bg-green-100/50 py-12 md:py-18 lg:py-20">
      <div className="container max-w-8xl mx-auto px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-Alata py-4 text-gray-700">
              General Questions
            </h1>
            <p className="font-Raleway text-gray-600">
              All you need to know about our support and how to do it.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-full mt-8 lg:mt-0">
            <div>
              <button
                className="px-8 py-3 border border-green-500 text-green-500 duration-200 hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-lg mr-12"
                onClick={() => handleFAQ("retail")}
              >
                Retail FAQs
              </button>
              <button
                className="px-8 py-3 border border-green-500 text-green-500 duration-200 hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                onClick={() => handleFAQ("brand")}
              >
                Brand FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuestions;
