import { motion } from "framer-motion";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import MobileNavLink from "./MobileNavLink";

const OpenMenu = ({ handleCloseMenu }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-800 lg:hidden absolute w-full h-full top-0 left-0 overflow-hidden cursor-crosshair"
        onClick={() => handleCloseMenu()}
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute lg:hidden h-full bg-white top-0 right-0 w-full sm:min-w-[500px] sm:w-1/3 z-40 overflow-hidden"
      >
        <div className="flex flex-col px-6 py-6 h-full">
          <div
            onClick={() => handleCloseMenu()}
            className="flex justify-end hover:cursor-pointer"
          >
            <AiOutlineClose className="text-3xl" />
          </div>

          <div className="w-full py-12">
            <ul className="flex flex-col justify-center items-center space-y-12 font-Gruppo">
              <MobileNavLink title="Home" />
              <MobileNavLink title="Trending" />
              <MobileNavLink title="All Products" />
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OpenMenu;
