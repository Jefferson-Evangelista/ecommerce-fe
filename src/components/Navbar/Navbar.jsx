import React from "react";
import "./Navbar.css";

import { NavbarLinks } from "../NavbarLinks";
import { CartIcon, HeartIcon } from "../Icons";

const Navbar = () => (
  <nav className="container mx-auto flex items-end justify-between border-2 border-red-600 py-3 font-krona">
    <a href="/" className="navbar__logo text-lg font-bold md:text-2xl">
      Aphrodite
    </a>

    <div className="hidden text-sm md:flex">
      <NavbarLinks />
      <div className="flex">
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  </nav>
);

export default Navbar;
