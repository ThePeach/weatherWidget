import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, onClick}) => 
    <button onClick={onClick}>{children}</button>

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

export default Button;