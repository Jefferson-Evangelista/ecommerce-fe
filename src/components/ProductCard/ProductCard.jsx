import React from "react";
import { Link } from "react-router-dom";
import { ProductPrice } from "../../components";

const ProductCard = ({ id, name, brand, imgUrl, price }) => (
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
    <ProductPrice price={price} />
  </Link>
);

export default ProductCard;
