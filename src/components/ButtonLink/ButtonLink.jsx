import React from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ path, text }) => (
  <div>
    <NavLink
      to={path}
      className="inline-block rounded-full bg-yellow px-10 py-4 font-krona text-xs font-bold"
    >
      {text}
    </NavLink>
  </div>
);

export default ButtonLink;
