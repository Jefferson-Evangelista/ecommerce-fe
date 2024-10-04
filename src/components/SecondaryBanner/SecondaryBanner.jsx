import React from "react";
import { ButtonLink } from "../../components";
import { bannerImg2 } from "../../assets";

const SecondaryBanner = () => {
  return (
    <div className="container relative bottom-[-100px] mx-auto flex w-full flex-col-reverse items-center bg-pink sm:flex-row sm:justify-evenly md:px-24 lg:justify-between">
      <div className="mb-4 flex flex-col items-start text-lg md:mb-0 ">
        <h3 className="mb-4 font-krona">
          Be natural, <br /> be smart, <br /> be you
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="md:ml-4">
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
