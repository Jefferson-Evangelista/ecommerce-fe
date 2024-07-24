import React from "react";
import PropTypes from "prop-types";

const Title = ({ name, type }) => (
  <div className="mb-10">
    <h5 className="font-krona text-sm">{name}</h5>
    <p className="text-sm text-darkGrey">{type}</p>
  </div>
);

export default Title;

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
