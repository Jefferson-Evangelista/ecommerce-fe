import React from "react";
import useGetRecommendedProducts from "../../hooks/useGetRecommendedProducts";
import { ProductCard, SectionTitle } from "../../components";

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product);
  if (product.length === 0) return null;
  return (
    <>
     <SectionTitle text="For you" />
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
    </>
  );
};

export default RecommendedProducts;
