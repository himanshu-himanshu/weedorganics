import React, { useState, useEffect } from "react";

import Links from "./Links";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

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
      className={`w-full flex flex-row px-6 md:px-12 lg:px-16 py-4 text-secondary h-[10vh] fixed top-0 z-40 bg-${
        show ? "black" : "transparent"
      } opacity-100 duration-200`}
    >
      <div className="flex items-center justify-start w-1/3">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center justify-end w-2/3">
        <Links />
      </div>
      <div className="lg:hidden flex items-center justify-end w-2/3">
        <MobileMenu handleOpenMenu={handleOpenMenu} />
      </div>
      {openMenu && <OpenMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default Navbar;
