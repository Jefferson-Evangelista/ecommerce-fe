import React from "react";
import { ButtonLink } from "../../components";
import { bannerImg2 } from "../../assets";

const SecondaryBanner = () => {
  return (
    <div className="container relative bottom-[-100px] mx-auto flex w-full flex-col-reverse items-center justify-between bg-pink px-24 md:flex-row">
      <div className=" flex flex-row items-start space-x-4 text-lg md:flex-col md:space-x-0">
        <h3 className="mb-4 font-krona">
          Be natural, <br /> be smart, <br /> be you
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
