import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
