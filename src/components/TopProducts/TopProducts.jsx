import React, { useEffect } from "react";
import {
  ButtonLink,
  Product,
  SecondaryBanner,
  SectionTitle,
} from "../../components";
import useGetProducts from "../../hooks/useGetProducts";

const TopProducts = () => {
  const { products, getTopProducts } = useGetProducts();

  useEffect(() => {
    getTopProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-6 flex items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink text="see more" isMain />
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <Product
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
