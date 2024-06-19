import useGetProducts from "../hooks/useGetProducts";

const Product = () => {
  const { products, singleProduct } = useGetProducts();

  if (!singleProduct) return <p>Loading...</p>;

  return (
    <div
      className="container mx-auto mt-20 h-screen
    "
    >
      <div className="mb-10">
        <h5 className="font-krona text-sm">{singleProduct.name}</h5>
        <p className="text-sm text-darkGrey">{singleProduct.product_type}</p>
      </div>

      <div className="mb-10 flex w-full">
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
            <div className="relative">
              <div className="absolute top-0 z-[-1] h-10 w-10 rounded-full bg-lightGrey" />
              <p className="ml-4 pt-2 font-krona text-xl">
                {singleProduct.price} &#36;
              </p>
            </div>
            {/* <div>counter</div> */}
            <div>
              <button className="inline-block rounded-full bg-yellow px-6 py-3 font-krona text-xs font-bold">
                Add to cart
              </button>
            </div>
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
    </div>
  );
};

export default Product;
