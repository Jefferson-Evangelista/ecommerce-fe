import React from "react";
import { BenefitsItem } from "../../components";
const benefits = [
  {
    title: "Delivery",
    text: "Lorem ipsum dolor sit amet elit. Odit, sunt optio facere harum consequuntur debitis, animi.",
  },
  {
    title: "Products",
    text: "Lorem ipsum dolor sit amet consectetur atque ipsa, beatae adipisci!",
  },
  {
    title: "Payments",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores dolorem sint illum.",
  },
];
const Benefits = () => {
  
  return (
    <div className="container mx-auto my-10 flex justify-evenly">
      {benefits.map((item, index) => (
        <BenefitsItem props={item} key={`${item}.${index}`} />
      ))}
    </div>
  );
};

export default Benefits;
