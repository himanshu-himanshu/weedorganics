import React, { useState, useEffect } from "react";

import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="flex flex-row px-8 md:px-16 py-4 text-primary">
      <div className="flex items-center justify-start w-1/2">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end w-1/2">
        <Links />
      </div>
      <MobileMenu handleOpenMenu={handleOpenMenu} />
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default Navbar;
