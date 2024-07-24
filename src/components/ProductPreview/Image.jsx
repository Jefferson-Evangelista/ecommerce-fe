import React from "react";
import PropTypes from "prop-types";

const Image = ({ img, name }) => (
  <div className="flex w-2/5 p-10">
    <img width="240" src={img} alt={name} className="mx-auto" />
  </div>
);

export default Image;

Image.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
