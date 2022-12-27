import React from "react";
import Image from "next/image";

import image from "../../../public/image1.svg";
import image2 from "../../../public/image2.svg";
import Solution from "./Solution";
import {
  solutionTitleOne,
  solutionDesOne,
  solutionTitleSecond,
  solutionDesSecond,
} from "../../../constants/constant";

const Solutions = () => {
  return (
    <div className="w-full h-full bg-gray-100 py-12 clip-div">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-6 md:py-8 lg:py-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Raleway text-primary text-center underline--magical tracking-wide font-bold">
            What We Provide
          </h2>
        </div>
        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title={solutionTitleOne}
            des={solutionDesOne}
            showKnowMore={true}
          />
          <div className="solution-inner-div lg:justify-end">
            <Image src={image} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="solution-div flex-col-reverse lg:flex-row">
          <div className="solution-inner-div lg:justify-start">
            <Image src={image2} alt="Customer Image" className="w-[500px]" />
          </div>
          <Solution
            title={solutionTitleSecond}
            des={solutionDesSecond}
            showKnowMore={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
