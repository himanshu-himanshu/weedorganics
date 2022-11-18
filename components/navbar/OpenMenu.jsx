import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import MobileNavLink from "./MobileNavLink";

const OpenMenu = ({ handleCloseMenu }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        className="bg-black fixed lg:hidden w-[100%] h-screen top-0 left-0 bottom-0 cursor-crosshair z-10 overflow-y-hidden"
        onClick={() => handleCloseMenu()}
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute lg:hidden h-screen bg-balck top-0 right-0 overflow-hidden bg-green-700 w-full sm:min-w-[500px] sm:w-1/3 z-40"
      >
        <div className="flex flex-col px-6 py-6 h-full overflow-hidden ">
          <div className="flex justify-end">
            <AiOutlineClose
              className="text-3xl hover:cursor-pointer"
              onClick={() => handleCloseMenu()}
            />
          </div>

          <div className="w-full py-12">
            <ul className="flex flex-col justify-center items-center space-y-12 font-Gruppo">
              <MobileNavLink title="Home" />
              <MobileNavLink title="Solutions" />
              <MobileNavLink title="Help Center" />
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OpenMenu;
