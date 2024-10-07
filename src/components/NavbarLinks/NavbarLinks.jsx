import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = ({ toggleMenu }) => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/search",
      name: "Search",
    },
    {
      path: "/about",
      name: "About",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      {links.map((link, index) => (
        <NavLink
          className="mr-8 text-sm lowercase "
          to={link.path}
          key={`${link.name}-${link.index}`}
          onClick={toggleMenu}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarLinks;
