import React from "react";

const ProductTitle = ({ name, type }) => (
  <div className="mb-10">
    <h5 className="font-krona text-sm">{name}</h5>
    <p className="text-sm text-darkGrey">{type}</p>
  </div>
);

export default ProductTitle;
