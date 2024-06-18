import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, name, brand, imgUrl, price }) => (
  <Link
    className="delay-50 mb-6 mr-6 flex transform flex-col rounded-md px-4 py-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    to={`/product/${id}`}
  >
    <img
      width="120"
      src={`https://${imgUrl}`}
      alt={name}
      className="mx-auto mb-6"
    />
    <p className="font-krona text-sm lowercase text-yellow">{name}</p>
    <p className="mb-4">{brand}</p>

    <div className="relative">
      <p className="text-md ml-4 pt-2 font-krona">{price} &#36;</p>
      <div className="absolute top-0 z-[-1] h-10 w-10 rounded-full bg-lightGrey" />
    </div>
  </Link>
);

export default Product;
