import React from "react";

const Links = () => {
  return (
    <div className="flex flex-row space-x-4 lg:space-x-8 uppercase tracking-wider items-center text-lg font-Raleway font-thin">
      <span className="nav-link">Home</span>
      <span className="nav-link">Solutions</span>
      <span className="nav-link">Help Center</span>
      {/* <a
        href="#"
        className="font-normal text-primary border border-primary px-6 py-3 hover:text-white hover:bg-pink-500 hover:border-pink-500 duration-200 hover:shadow-md"
      >
        Contact Us
      </a> */}
    </div>
  );
};

export default Links;
