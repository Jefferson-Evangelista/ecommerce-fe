import React from "react";
import useGetRecommendedProducts from "../../hooks/useGetRecommendedProducts";

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product);
  if (product.length === 0) return null;
  return (
    <>
      {products.map((item, index) => (
        <p key={`${item}.${index}`}>{item.name}</p>
      ))}
      <p>Recommended Products</p>
    </>
  );
};

export default RecommendedProducts;
