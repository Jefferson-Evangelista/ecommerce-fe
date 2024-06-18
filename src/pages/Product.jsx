import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";
import { useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useGetProducts();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  if (!singleProduct) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-20">
      <div className="mb-10">
        <h5 className="font-krona text-sm">{singleProduct.name}</h5>
        <p className="text-sm text-darkGrey">{singleProduct.product_type}</p>
      </div>

      <div className="flex">
        <div className="flex-1">
          <img
            width="120"
            src={`https://${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
            className="mx-auto mb-6"
          />
        </div>

        <div className="flex-1">
          {/* title */}
          <p className="font-krona text-xs text-yellow">
            {singleProduct.product_type}
          </p>
          <h1 className="font-krona text-base">{singleProduct.name}</h1>
          {/* image */}

          {/* category */}
          <p>{singleProduct.category}</p>
          <div className="flex">
            <div className="relative">
              <p className="ml-4 pt-2 font-krona text-xl">
                {singleProduct.price} &#36;
              </p>
              <div className="absolute top-0 z-[-1] h-10 w-10 rounded-full bg-lightGrey" />
            </div>
            <div>counter</div>
            <div>button</div>
          </div>
          {/* description */}
          <p>{singleProduct.description.replace(/(<([^>]+)>)/gi, "")}</p>
          {/* for you product */}
        </div>
      </div>
    </div>
  );
};

export default Product;
