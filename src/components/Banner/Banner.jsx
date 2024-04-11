import React from "react";
import { bannerImg } from "../../assets";
import { ButtonLink } from "../../components";

const Banner = () => {
  return (
    <div className="container mx-auto mb-10 mt-20 flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="mb-4 font-krona text-3xl">
          Unveil Your Radiance with Every Luxurious Touch. Explore Our Range and
          Rediscover Your Glow!
        </h1>
        <p className="mb-4 text-sm">
          The right info at the right time to the right people. Baseline the
          procedure and samepage your department cloud native container based,
          for drop-dead date.
        </p>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-8 flex w-1/2 items-center justify-center">
        <img
          src={bannerImg}
          alt="Beauty products on a blanket"
          className=" borderShape h-[350px] w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
