import React from "react";
import useGetRecommendedProducts from "../../hooks/useGetRecommendedProducts";
import { ProductCard, SectionTitle, Loader } from "../../components";

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product);

  return (
    <>
      <SectionTitle text="For you" />
      {products.length === 0 ? (
        <div className="my-4 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              brand={item.brand}
              imgUrl={item.api_featured_image}
              price={item.price}
              currency={item.price_sign}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RecommendedProducts;
