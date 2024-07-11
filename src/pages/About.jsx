import React from "react";
import { BrandLink } from "../components";

const About = () => {
  return (
    <>
      <div className="container relative mx-auto my-20">
        <div className="absolute left-[-6px] top-0 z-[-1] h-10 w-10 rounded-full bg-yellow" />
        <BrandLink classes="text-4xl" />
      </div>
      <div className="bg-yellow py-10">
        <div className="mx-auto w-2/3 text-justify ">
          <p className="mb-4 ">
            We are the leading omnichannel provider for premium beauty in
            Europe. Since our foundation more than 200 years ago, beauty has
            been deeply rooted in our tradition and corporate DNA. Our mission:
            We inspire our customers to live their own kind of beauty – through
            our unique range online and in around 1,850 branches. As an
            international beauty group with four corporate brands, diversity is
            not just a word for us, but a statement that we live in all of our
            activities every day.
          </p>
          <p className="">
            We are the partner of choice for brands – with selected exclusive
            brands and our strong own brands. Our range includes fragrances,
            make-up, skin care, hair care, accessories and beauty services. Our
            claim is nothing less than the best selection of brands and the best
            customer experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
