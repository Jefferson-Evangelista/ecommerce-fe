import React, { useEffect } from "react";
import { ButtonLink, SecondaryBanner } from "../../components";
import useGetProducts from "../../hooks/useGetProducts";

const TopProducts = () => {
  const { products, getTopProducts } = useGetProducts();

  useEffect(() => {
    getTopProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <h3 className="font-krona text-xl font-bold">Top Products</h3>
        <ButtonLink text="see more" isMain />
      </div>

      {/* Products */}
      <div className="h-80">
        {products.map((product, index) => (
          <p key={`${product}.${index}`}>{product.id}</p>
        ))}
      </div>
      <SecondaryBanner />
    </>
  );
};

export default TopProducts;
