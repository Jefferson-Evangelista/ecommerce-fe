import React from "react";
import { bannerImg } from "../../assets";
import { ButtonLink } from "../../components";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto mb-10 mt-10 flex flex-col-reverse items-center justify-around md:mt-20 md:flex-row">
      <div className="flex-1">
        <h1 className="mb-4 font-krona text-xl md:text-3xl">
          Unveil Your Radiance with Every Luxurious Touch
        </h1>
        <p className="mb-4 text-sm">
          This project is built with data from a MakeUp API using Axios,
          Tailwind CSS, ReactJS, PropTypes, React Context API, and React Router.
        </p>
        <p className="mb-4 text-sm">
          The right info at the right time to the right people. Baseline the
          procedure and samepage your department cloud native container based,
          for drop-dead date.
        </p>
        <ButtonLink path="/about" text="see more" isMain />
      </div>
      <div className="mb-10 flex flex-1 items-center justify-end sm:ml-8 md:mb-0 ">
        <img
          src={bannerImg}
          alt="Beauty products on a blanket"
          className="borderShape object-fit w-[230px] drop-shadow-2xl sm:h-[300px] sm:w-[300px] md:h-[550px] md:w-[550px]"
        />
      </div>
    </div>
  );
};

export default Banner;
