import React from "react";
import { motion } from "framer-motion";

const MobileNavLink = ({ title }) => {
  return (
    <motion.li
      className="text-xl tracking-wider font-bold text-gray-100 w-full text-center py-4 hover:border-pink-500 hover:bg-pink-500 hover:text-secondary duration-200 hover:cursor-pointer"
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {title}
    </motion.li>
  );
};

export default MobileNavLink;
