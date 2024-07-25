import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import Info from "./Info";
import Description from "./Description";
import Title from "./Title";
import { CartButton, ProductPrice } from "../../components";

const ProductPreview = ({ name, img, type, price, category, description }) => (
  <>
    <Title name={name} type={type} />
    <div className="mb-20 flex w-full flex-col items-center justify-center md:flex-row">
      <Image name={name} img={img} />

      <div className="flex-1">
        <Info type={type} name={name} category={category} />

        <div className="my-10 flex justify-between">
          <ProductPrice price={price} isLarge />
          <CartButton />
        </div>

        <Description text={description} />
      </div>
    </div>
  </>
);

export default ProductPreview;

ProductPreview.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
