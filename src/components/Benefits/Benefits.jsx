import React from "react";
import { BenefitsItem } from "../../components";

const Benefits = () => {
  const benefits = [
    {
      title: "Delivery",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Products",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Payments",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="container mx-auto my-10 flex border border-rose-400">
      {benefits.map((item) => (
        <div className="w-1/3">
          <BenefitsItem props={item} />
        </div>
      ))}
    </div>
  );
};

export default Benefits;
