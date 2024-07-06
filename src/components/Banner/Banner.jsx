import React from "react";
import { bannerImg } from "../../assets";
import { ButtonLink } from "../../components";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto my-24 flex flex-col-reverse items-center justify-around md:flex-row">
      <div className="flex-1">
        <h1 className="mb-4 font-krona text-xl md:text-3xl">
          Unveil Your Radiance with Every Luxurious Touch. Explore Our Range and
          Rediscover Your Glow!
        </h1>
        <p className="mb-4 text-sm">
          The right info at the right time to the right people. Baseline the
          procedure and samepage your department cloud native container based,
          for drop-dead date.
        </p>
        <ButtonLink path="/about" text="see more" isMain />
      </div>
      <div className="mb-10 ml-8 flex flex-1 items-center  justify-end md:mb-0 ">
        <img
          src={bannerImg}
          alt="Beauty products on a blanket"
          className="borderShape object-fit h-[350px] w-[350px] drop-shadow-2xl sm:h-[400px] sm:w-[400px] md:h-[550px] md:w-[550px]"
        />
      </div>
    </div>
  );
};

export default Banner;
