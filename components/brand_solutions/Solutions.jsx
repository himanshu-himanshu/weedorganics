import React from "react";
import Image from "next/image";

import Solution from "../solution/Solution";
import solution1 from "../../public/solution_1.png";
import solution2 from "../../public/solution_2.png";
import solution3 from "../../public/solution_3.png";

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
            title="Brand and Product Listing"
            des="List your brand with WeedOrganic to amplify your brand and increase brand awareness. Grow your brand’s reach with followers, likes, product reviews and more. With your brand subscription, list unlimited products at no extra cost. Showcase your products so that customers can make informed purchase decisions and discover the organic cannabis product for them. Send web and in app notifications to your followers of new products when they become available."
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
            title="Feature Brands and Products"
            des="Put your organic cannabis brands and products in the spotlight. With our featured brands, featured products and featured strains placements on WeedOrganic, reach customers looking to purchase organic cannabis."
            showKnowMore={false}
          />
        </div>
        <div className="solution-div flex-col lg:flex-row">
          <Solution
            title="Advertising Placement"
            des="Whether video ad placements in store on our organic menu tv or ad space on our web and mobile apps, WeedOrganic provides custom sponsored ad placements to increase reach even further with customers to grow your business."
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
