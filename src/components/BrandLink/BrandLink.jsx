import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({ classes }) => (
  <Link className={`font-krona text-2xl ${classes}`} to="/">
    Aphrodite
  </Link>
);

export default BrandLink;
