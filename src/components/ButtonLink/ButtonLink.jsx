import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ path, text, isMain, className }) => (
  <div>
    <NavLink
      to={path}
      className={`inline-block rounded-full font-krona text-xs ${
        isMain
          ? "bg-yellow px-6 py-4 text-[14px] text-xs font-bold sm:text-sm md:px-10 md:py-4 "
          : "bg-dark px-4 py-2 text-xs font-normal text-white md:px-4"
      } ${className}`}
    >
      {text}
    </NavLink>
  </div>
);

export default ButtonLink;
