import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ path, text, isMain, className }) => (
  <NavLink
    to={path}
    className={`inline-block rounded-full font-krona text-xs ${
      isMain
        ? "bg-yellow px-4 py-2 text-sm font-bold md:px-10 md:py-4 "
        : "bg-dark px-4 py-2 font-normal text-white md:px-4"
    } ${className}`}
  >
    {text}
  </NavLink>
);

export default ButtonLink;
