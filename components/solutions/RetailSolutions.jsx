import Image from "next/image";

import Solution from "../homepage/solution/Solution";
import solution1 from "../../public/retail_1.png";
import solution2 from "../../public/retail_2.png";
import solution3 from "../../public/retail_3.png";
import solution4 from "../../public/retail_4.png";
import solution5 from "../../public/retail_5.png";
import solution6 from "../../public/retail_6.png";
import {
  retailSolutionTitle1,
  retailSolutionTitle2,
  retailSolutionTitle3,
  retailSolutionTitle4,
  retailSolutionTitle5,
  retailSolutionTitle6,
  retailSolutionDes1,
  retailSolutionDes2,
  retailSolutionDes3,
  retailSolutionDes4,
  retailSolutionDes5,
  retailSolutionDes6,
} from "../../constants/constant";

const RetailSolutions = () => {
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
            title={retailSolutionTitle1}
            des={retailSolutionDes1}
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
            title={retailSolutionTitle2}
            des={retailSolutionDes2}
            showKnowMore={false}
          />
        </div>

        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title={retailSolutionTitle3}
            des={retailSolutionDes3}
            showKnowMore={false}
          />
          <div className="solution-inner-div lg:justify-end">
            <Image src={solution3} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="solution-div flex-col-reverse lg:flex-row">
          <div className="solution-inner-div lg:justify-start">
            <Image src={solution4} alt="Customer Image" className="w-[500px]" />
          </div>
          <Solution
            title={retailSolutionTitle4}
            des={retailSolutionDes4}
            showKnowMore={false}
          />
        </div>

        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title={retailSolutionTitle5}
            des={retailSolutionDes5}
            showKnowMore={false}
          />
          <div className="solution-inner-div lg:justify-end">
            <Image src={solution5} alt="Customer Image" className="w-[500px]" />
          </div>
        </div>

        <div className="solution-div flex-col-reverse lg:flex-row">
          <div className="solution-inner-div lg:justify-start">
            <Image src={solution6} alt="Customer Image" className="w-[500px]" />
          </div>
          <Solution
            title={retailSolutionTitle6}
            des={retailSolutionDes6}
            showKnowMore={false}
          />
        </div>
      </div>
    </div>
  );
};

export default RetailSolutions;
