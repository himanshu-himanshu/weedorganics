import React from "react";

import BusinessCard from "./BusinessCard";
import reachImage from "../public/target.png";
import engageImage from "../public/user.png";
import connectImage from "../public/networking.png";
import convertImage from "../public/bag.png";

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
      <div className="container max-w-6xl mx-auto px-8 lg:px-0">
        <div className="w-full flex flex-col justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Gruppo font-bold text-primary text-center underline--magical">
            Grow Your Business
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Gruppo font-bold text-primary text-center">
            With WeedOrganic
          </h1>
        </div>
        <div className="w-full py-8 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
