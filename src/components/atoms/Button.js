import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, onclickCb}) => 
    <button onClick={onclickCb}>{children}</button>

Button.propTypes = {
    onclickCb: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default Button;