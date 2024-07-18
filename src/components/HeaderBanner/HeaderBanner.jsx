import React from "react";

import { bannerImg2 } from "../../assets";

const HeaderyBanner = () => {
  return (
    <div className="mx-6 mb-4">
      <div className="bottom-[-100px] flex w-full flex-col-reverse items-center justify-between bg-pink px-24 md:flex-row">
        <div className=" flex flex-row items-start space-x-4 text-lg md:flex-col md:space-x-0">
          <h3 className="mb-4 font-krona text-base">
            Be natural, <br /> be smart, <br /> be you
          </h3>
        </div>
        <div className="ml-4">
          <img
            className="h-[250px] w-[250px] py-8"
            src={bannerImg2}
            alt="skincare products"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderyBanner;
