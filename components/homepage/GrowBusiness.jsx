import React from "react";

import BusinessCard from "./BusinessCard";
import reachImage from "../../public/target.png";
import engageImage from "../../public/user.png";
import connectImage from "../../public/networking.png";
import convertImage from "../../public/bag.png";
import { reach, engage, connect, convert } from "../../constants/constant";

const GrowBusiness = () => {
  return (
    <div className="w-full h-full bg-secondary py-12 md:py-18 lg:py-20">
      <div className="container max-w-6xl mx-auto px-8 lg:px-0">
        <div className="w-full flex flex-col justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Raleway font-bold text-primary text-center underline--magical tracking-wide">
            Grow Your Business
            <br /> With <i>WeedOrganic</i>
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
