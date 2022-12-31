import React, { useState, useEffect } from "react";

import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const background = show ? "bg-gray-800" : "transparent";

  const transitionBar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setOpenMenu(false);
      }
      if (openMenu) {
        document.body.classList.add("fixed");
      }
      if (!openMenu) {
        document.body.classList.remove("fixed");
      }
    }
    window.addEventListener("scroll", transitionBar);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("scroll", transitionBar);
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    document.body.classList.add("fixed");
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
    document.body.classList.remove("fixed");
  };

  return (
    <div
      className={`w-full flex flex-row px-6 md:px-10 py-4 text-secondary h-[10vh] fixed top-0 z-40 ${background} opacity-100 duration-200`}
    >
      <div className="flex items-center justify-start w-2/5 lg:w-1/5">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end w-4/5">
        <Links />
      </div>
      <div className="lg:hidden flex items-center justify-end w-3/5">
        <MobileMenu handleOpenMenu={handleOpenMenu} />
      </div>
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default Navbar;
