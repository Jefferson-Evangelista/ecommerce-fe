import React from "react";
import { ButtonLink } from "../../components";
import { bannerImg2 } from "../../assets";

const SecondaryBanner = () => {
  return (
    <div className="bg-pink flex w-full items-center justify-between px-24">
      <div className="text-lg">
        <h3 className="mb-4 font-krona">
          <br /> Be natural, <br /> be smooth, <br /> beautify
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="py-8"
          src={bannerImg2}
          alt="skincare products"
          width={250}
        />
      </div>
    </div>
  );
};

export default SecondaryBanner;
