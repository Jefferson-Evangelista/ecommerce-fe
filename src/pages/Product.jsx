import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import useGetProduct from "../hooks/useGetProduct";
import {
  ProductPreview,
  ProductPrice,
  ProductTitle,
  RecommendedProducts,
  Benefits,
} from "../components";

const Product = () => {
  const location = useLocation();
  const { singleProduct } = useGetProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) return <p>Loading...</p>;
  return (
    <div className="container mx-auto mt-20">
      <ProductTitle
        name={singleProduct.name}
        type={singleProduct.product_type.replace(/_/g, " ")}
      />
      <ProductPreview
        name={singleProduct.name}
        img={singleProduct.api_featured_image}
        type={singleProduct.product_type}
        category={singleProduct.category}
        price={singleProduct.price}
        description={singleProduct.description}
      />
      {/* for you product */}
      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
