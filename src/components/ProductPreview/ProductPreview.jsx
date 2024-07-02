import React from "react";
import PropTypes from "prop-types";
import { ProductPrice } from "../../components";

const ProductPreview = ({ name, img, type, category, price, description }) => {
  return (
    <div className="mb-20 flex w-full">
      <div className="flex w-1/2 items-center justify-center">
        <img
          width="200"
          src={`https://${img}`}
          alt={name}
          className="mx-auto mb-6"
        />
      </div>

      <div className="flex-1">
        <p className="text-xm font-krona text-yellow">
          {type.replace(/_/g, " ")}
        </p>
        <h1 className="font-krona text-base">{name}</h1>
        <div className="my-10 flex justify-between">
          <ProductPrice price={price} isLarge />
          {/* <div>counter</div> */}
          <button className="inline-block rounded-full bg-yellow px-6 py-3 font-krona text-xs font-bold">
            Add to cart
          </button>
        </div>
        {/* description */}
        <p>{description.replace(/(<([^>]+)>)/gi, "")}</p>
      </div>
    </div>
  );
};

export default ProductPreview;

ProductPreview.PropTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
