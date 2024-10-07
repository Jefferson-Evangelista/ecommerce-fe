// import React from "react";
// import "./Navbar.css";

// import { NavbarLinks } from "../NavbarLinks";
// import { CartIcon, HeartIcon } from "../Icons";

// const Navbar = () => (
//   <nav className="container mx-auto flex items-end justify-between py-3 font-krona">
//     <a href="/" className="navbar__logo text-lg font-bold md:text-2xl">
//       Aphrodite
//     </a>

//     <div className="hidden text-sm md:flex">
//       <NavbarLinks />
//       <div className="flex">
//         <HeartIcon />
//         <CartIcon />
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

import { NavbarLinks } from "../NavbarLinks";
import { CartIcon, HeartIcon } from "../Icons";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto flex items-center justify-between py-3 font-krona">
      <a href="/" className="navbar__logo text-lg font-bold md:text-2xl">
        Aphrodite
      </a>

      {/* Desktop Navbar Links */}
      <div className="hidden text-sm md:flex">
        <NavbarLinks />
        <div className="flex">
          <HeartIcon />
          <CartIcon />
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="flex items-center justify-center md:hidden">
        <div className="flex">
          <HeartIcon />
          <CartIcon />
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Hamburger Icon with transition */}
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span className="mb-1 block h-0.5 w-6 transform bg-black transition-transform duration-300"></span>
            <span className="mb-1 block h-0.5 w-6 transform bg-black transition-transform duration-300"></span>
            <span className="block h-0.5 w-6 transform bg-black transition-transform duration-300"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay with slide-in animation */}
      <div
        className={`fixed inset-0 z-50 transform bg-white transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } flex flex-col items-center justify-center`}
      >
        <div className="">
          <button onClick={toggleMenu} className="mb-4">
            Close
          </button>
          <NavbarLinks toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
