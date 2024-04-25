import React from "react";
import { ButtonLink } from "../../components";
import { bannerImg2 } from "../../assets";

const SecondaryBanner = () => {
  return (
    <div className="container mx-auto flex w-full items-center justify-between bg-pink px-24">
      <div className="text-lg">
        <h3 className="mb-4 font-krona">
          <br /> Be natural, <br /> be smooth, <br /> beautify
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="h-[250px] w-[250px] py-8"
          src={bannerImg2}
          alt="skincare products"
        />
      </div>
    </div>
  );
};

export default SecondaryBanner;
