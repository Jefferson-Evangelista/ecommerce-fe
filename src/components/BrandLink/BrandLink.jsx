import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({ classes, isBold }) => (
  <Link className={`font-krona ${classes} ${isBold && "font-bold"}`} to="/">
    Aphrodite
  </Link>
);

export default BrandLink;
