import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
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
    <>
      {links.map((link, index) => (
        <NavLink
          className="mr-8 text-sm lowercase"
          to={link.path}
          key={`${link.name}-${link.index}`}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavbarLinks;
