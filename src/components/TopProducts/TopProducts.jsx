import React from "react";
import { ButtonLink } from "../../components";

const TopProducts = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-krona text-xl font-bold">Top Products</h3>
        <ButtonLink text="see more" />
      </div>
    </>
  );
};

export default TopProducts;
