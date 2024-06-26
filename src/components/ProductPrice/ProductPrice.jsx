import React from "react";

const ProductPrice = ({ price, isLarge }) => (
  <div className="relative">
    <div className="absolute top-0 z-[-1] h-10 w-10 rounded-full bg-lightGrey" />
    <p className={`text-${isLarge ? "md" : "lg"} ml-4 pt-2 font-krona`}>
      {price} &#36;
    </p>
  </div>
);

export default ProductPrice;
