import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({ classes }) => (
  <Link className={`font-krona text-2xl ${classes}`} to="/">
    Aphrodite
    <p className="text-[12px] text-white">be you, beautiful</p>
  </Link>
);

export default BrandLink;
