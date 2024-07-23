import React from "react";
import {
  ButtonLink,
  ProductCard,
  SecondaryBanner,
  SectionTitle,
  Loader,
} from "../../components";

import useGetTopProducts from "../../hooks/useGetTopProducts";

const TopProducts = () => {
  const products = useGetTopProducts();

  return (
    <div className="md:mt-20">
      <div className="container mx-auto -mb-10">
        <div className="mb-6 flex items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink
            text="see more"
            isMain
            className="hidden md:block"
            path="/search"
          />
        </div>

        <div className="flex flex-wrap justify-center">
          {products.length === 0 ? (
            <div className="my-4 flex items-center justify-center">
              <Loader classes="my-4" />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Products */}

      <SecondaryBanner />
    </div>
  );
};

export default TopProducts;
