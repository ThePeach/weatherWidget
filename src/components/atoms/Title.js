import React from 'react';
import PropTypes from 'prop-types';

const Title = ({headingSize, children}) => {
    const HeadingTag = `h${headingSize}`;

    return <HeadingTag>{children}</HeadingTag>;
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
    headingSize: PropTypes.number
}

Title.defaultProps = {
    headingSize: 2
}

export default Title;