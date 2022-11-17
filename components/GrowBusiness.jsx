import React from "react";

import BusinessCard from "./BusinessCard";
import reachImage from "../assets/target.png";
import engageImage from "../assets/user.png";
import connectImage from "../assets/networking.png";
import convertImage from "../assets/bag.png";

const GrowBusiness = () => {
  let reach =
    "Reach customers looking to purchase organic cannabis products with our web and mobile apps.";

  let engage =
    "Engage customers with menu, deals, notifications, ad placement and more.";

  let connect =
    "Connect customers to organic cannabis products to help choose the right product for them.";

  let convert =
    "Convert customers into purchases to drive in store and online sales.";

  return (
    <div className="w-full h-full bg-gray-200 py-12">
      <div class="container max-w-6xl mx-auto px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-5xl lg:text-6xl font-Gruppo font-bold text-primary text-center">
            Grow Your Business
            <br /> With WeedOrganic
          </h1>
        </div>
        <div className="w-full flex flex-col lg:space-x-4 lg:flex-row space-x-0 py-8">
          <BusinessCard image={reachImage} text={reach} />
          <BusinessCard image={engageImage} text={engage} />
          <BusinessCard image={connectImage} text={connect} />
          <BusinessCard image={convertImage} text={convert} />
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
