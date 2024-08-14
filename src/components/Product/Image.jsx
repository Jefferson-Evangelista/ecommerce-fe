import React from "react";
import PropTypes from "prop-types";

const Image = ({ name, img }) => (
  <div className="flex w-3/4 items-center justify-center sm:w-2/4 md:w-1/4 lg:mr-10 lg:w-full">
    <img src={img} alt={name} />
  </div>
);

export default Image;

Image.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
