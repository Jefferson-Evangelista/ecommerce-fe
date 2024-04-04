import React from "react";
import "./Navbar.css";

import { NavbarLinks } from "../NavbarLinks";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-end justify-between py-3 font-krona">
      {/* Brand */}
      <a href="/" className="navbar__logo text-2xl">
        Beautify
      </a>

      <div className="flex text-sm">
        <NavbarLinks />

        {/* Icons */}
        <div className="flex">
          <HeartIcon color="blue" />
          <CartIcon color="blue" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
