import React from "react";
import PropTypes from "prop-types";

const Title = ({ headingSize, children, className }) => {
  const HeadingTag = `h${headingSize}`;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  headingSize: PropTypes.number,
  className: PropTypes.string
};

Title.defaultProps = {
  headingSize: 2,
  className: null
};

export default Title;
