import React from "react";
import "./Navbar.css";

import { NavbarLinks } from "../NavbarLinks";
import { CartIcon, HeartIcon } from "../Icons";

const Navbar = () => (
  <nav className="container mx-auto flex items-end justify-between py-3 font-krona">
    <a href="/" className="navbar__logo text-2xl">
      Beautify
    </a>

    <div className="flex text-sm">
      <NavbarLinks />
      <div className="flex">
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  </nav>
);

export default Navbar;
