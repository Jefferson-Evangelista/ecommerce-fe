import React from "react";
import {
  ButtonLink,
  ProductCard,
  SecondaryBanner,
  SectionTitle,
} from "../../components";
import useGetTopProducts from "../../hooks/useGetTopProducts";

const TopProducts = () => {
  const products = useGetTopProducts();

  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-6 flex items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink text="see more" isMain />
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}
              currency={product.price_sign}
            />
          ))}
        </div>
      </div>

      {/* Products */}

      <SecondaryBanner />
    </>
  );
};

export default TopProducts;
