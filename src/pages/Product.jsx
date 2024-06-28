import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import useGetProduct from "../hooks/useGetProduct";
import { ProductPrice, ProductTitle, RecommendedProducts } from "../components";

const Product = () => {
  const location = useLocation();
  const { singleProduct } = useGetProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) return <p>Loading...</p>;
  return (
    <div
      className="container mx-auto mt-20
    "
    >
      <div className="mb-10 flex w-full">
        <ProductTitle
          name={singleProduct.name}
          type={singleProduct.product_type}
        />
        <div className="flex w-1/2 items-center justify-center">
          <img
            width="200"
            src={`https://${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
            className="mx-auto mb-6"
          />
        </div>

        <div className="flex-1">
          {/* title */}
          <p className="text-xm font-krona text-yellow">
            {singleProduct.product_type}
          </p>
          <h1 className="font-krona text-base">{singleProduct.name}</h1>
          {/* image */}

          {/* category */}
          {/* <p>{singleProduct.category}</p>z */}
          <div className="my-10 flex justify-between">
            <ProductPrice price={singleProduct.price} isLarge />
            {/* <div>counter</div> */}
            <button className="inline-block rounded-full bg-yellow px-6 py-3 font-krona text-xs font-bold">
              Add to cart
            </button>
          </div>
          {/* description */}
          <p>{singleProduct.description.replace(/(<([^>]+)>)/gi, "")}</p>
          {/* for you product */}

          {/* <div className="flex flex-wrap justify-center">
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
          </div> */}
        </div>
      </div>
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
