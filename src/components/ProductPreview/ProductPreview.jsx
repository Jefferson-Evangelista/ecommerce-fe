import React from "react";
import PropTypes from "prop-types";
import { CartButton, ProductPrice } from "../../components";

const ProductPreview = ({ name, img, type, category, price, description }) => {
  const imgUrl = `https://${img}`;
  const formatType = type.replace(/_/g, " ");
  const formatDescription = description.replace(/(<([^>]+)>)/gi, "");

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center md:flex-row">
      <div className="flex w-2/5 p-10">
        <img width="240" src={imgUrl} alt={name} className="mx-auto" />
      </div>

      <div className="flex-1">
        <p className="text-xm font-krona text-yellow">{formatType}</p>
        <h1 className="font-krona text-base">{name}</h1>
        <div className="my-10 flex justify-between">
          <ProductPrice price={price} isLarge />
          {/* <div>counter</div> */}
          <CartButton />
        </div>
        {/* description */}
        <p>{formatDescription}</p>
      </div>
    </div>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
