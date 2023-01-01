import React, { useState } from "react";

import { retailFAQ } from "../../constants/constant";
import { brandFAQ } from "../../constants/constant";

const FAQ = ({ type }) => {
  const [open, setOpen] = useState(-1);

  const handleOpen = (value) => {
    if (value == open) {
      setOpen(-1);
      return;
    }
    setOpen(value);
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-center text-4xl font-Alata p-4 font-bold capitalize">
        Frequently Ask Questions for {type} Businesses
      </h1>
      <p className="text-center text-lg font-Raleway">
        These are just some of the most common questions we get asked. For
        anything else, please contact us.
      </p>
      <div className="mt-12">
        {type == "retail"
          ? retailFAQ.map((faq, index) => (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className="bg-gray-100/80 mb-4 p-4 duration-200 hover:cursor-pointer"
              >
                <div className="mb-3 text-md md:text-lg lg:text-xl font-Alata flex flex-row justify-between">
                  <span
                    className={
                      open == index ? "text-gray-800" : "text-gray-600"
                    }
                  >
                    {faq.question}
                  </span>
                  {open == index ? <span>-</span> : <span>+</span>}
                </div>
                <div className="font-Raleway font-bold text-gray-600 text-sm md:text-md lg:text-lg duration-500">
                  <span className={open == index ? "block" : "hidden"}>
                    {faq.answer}
                  </span>
                </div>
              </div>
            ))
          : brandFAQ.map((faq, index) => (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className="bg-gray-100/80 mb-4 p-4 duration-200 hover:cursor-pointer"
              >
                <div className="mb-3 text-md md:text-lg lg:text-xl font-Alata flex flex-row justify-between">
                  <span className={open == index ? "" : ""}>
                    {faq.question}
                  </span>
                  {open == index ? <span>-</span> : <span>+</span>}
                </div>
                <div className="font-Raleway font-bold text-gray-600 text-sm md:text-md lg:text-lg duration-500">
                  <span className={open == index ? "block" : "hidden"}>
                    {faq.answer}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default FAQ;
