import React from "react";
import { PriceRange, CategoriesBar, HeaderBanner } from "../../components";

const SideBar = () => {
  return (
    <>
      <div className="pl-6">
        <PriceRange />
        <div className="mb-4 bg-gray-200 px-6 py-2">
          <CategoriesBar />
        </div>
      </div>
    </>
  );
};

export default SideBar;
