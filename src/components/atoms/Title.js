import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({headingSize, children}) => {
    const HeadingTag = `h${headingSize}`;

    return <HeadingTag className={styles.main}>{children}</HeadingTag>;
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
    headingSize: PropTypes.number
}

Title.defaultProps = {
    headingSize: 2
}

export default Title;