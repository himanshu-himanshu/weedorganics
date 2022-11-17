import React, { useState, useEffect } from "react";

import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="w-full flex flex-row px-8 md:px-16 py-4 text-secondary h-[10vh] fixed top-0 z-40">
      <div className="flex items-center justify-start w-1/2">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end w-1/2">
        <Links />
      </div>
      <div className="lg:hidden flex items-center justify-end w-1/2">
        <MobileMenu handleOpenMenu={handleOpenMenu} />
      </div>
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default Navbar;
