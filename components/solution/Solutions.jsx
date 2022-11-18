import React from "react";
import Image from "next/image";

import image from "../../public/image1.svg";
import image2 from "../../public/image2.svg";
import Solution from "./Solution";
import {
  solutionTitleOne,
  solutionDesOne,
  solutionTitleSecond,
  solutionDesSecond,
} from "../../constants/constant";

const Solutions = () => {
  return (
    <div className="w-full h-full bg-gray-100 py-12">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-5xl lg:text-6xl font-Gruppo font-bold text-primary text-center underline--magical">
            What We Provide
          </h1>
        </div>
        <div className="solution-div">
          <Solution title={solutionTitleOne} des={solutionDesOne} />
          <div className="solution-inner-div lg:justify-end">
            <Image src={image} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="solution-div">
          <div className="solution-inner-div lg:justify-start">
            <Image src={image2} alt="Customer Image" className="w-[500px]" />
          </div>
          <Solution title={solutionTitleSecond} des={solutionDesSecond} />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
