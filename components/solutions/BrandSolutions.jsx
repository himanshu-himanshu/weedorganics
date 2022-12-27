import React from "react";
import Image from "next/image";

import Solution from "../homepage/solution/Solution";
import solution1 from "../../public/solution_1.png";
import solution2 from "../../public/solution_2.png";
import solution3 from "../../public/solution_3.png";
import {
  brandSolutionTitle1,
  brandSolutionTitle2,
  brandSolutionTitle3,
  brandSolutionDes1,
  brandSolutionDes2,
  brandSolutionDes3,
} from "../../constants/constant";

const Solutions = () => {
  return (
    <div className="w-full h-full bg-gray-100 py-12">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-6 md:py-8 lg:py-12">
          <h2 className="text-2xl lg:text-4xl font-Raleway text-pink-500 text-center tracking-wide font-bold">
            Join today & grow your business with WeedOrganic
          </h2>
        </div>

        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title={brandSolutionTitle1}
            des={brandSolutionDes1}
            showKnowMore={false}
          />
          <div className="solution-inner-div lg:justify-end">
            <Image src={solution1} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="solution-div flex-col-reverse lg:flex-row">
          <div className="solution-inner-div lg:justify-start">
            <Image src={solution2} alt="Customer Image" className="w-[500px]" />
          </div>
          <Solution
            title={brandSolutionTitle2}
            des={brandSolutionDes2}
            showKnowMore={false}
          />
        </div>

        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title={brandSolutionTitle3}
            des={brandSolutionDes3}
            showKnowMore={false}
          />
          <div className="solution-inner-div lg:justify-end">
            <Image src={solution3} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
