import React from "react";
import PropTypes from "prop-types";

const Icon = ({ src, alt }) => {
  return <img className="icon" alt={alt} src={src} />;
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
