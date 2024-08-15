import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";

import { RecommendedProducts, Benefits, Loader } from "../components";
import ProductPreview from "../components/Product/Product";

const Product = () => {
  const location = useLocation();
  const { singleProduct, isLoading } = useGetProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) return <Loader classes="h-screen" />;

  return (
    <div className="container mx-auto mt-20">
      {isLoading ? (
        <Loader classes="h-screen" />
      ) : (
        <ProductPreview
          name={singleProduct.name}
          img={singleProduct.api_featured_image}
          type={singleProduct.product_type}
          category={singleProduct.category}
          price={singleProduct.price}
          description={singleProduct.description}
        />
      )}
      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
