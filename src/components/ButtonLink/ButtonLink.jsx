import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ path, text, isMain }) => (
  <div>
    <NavLink
      to={path}
      className={`inline-block rounded-full font-krona text-xs ${
        isMain
          ? "bg-yellow px-10 py-4 font-bold "
          : "bg-dark px-4 py-2 font-normal text-white"
      }`}
    >
      {text}
    </NavLink>
  </div>
);

export default ButtonLink;
