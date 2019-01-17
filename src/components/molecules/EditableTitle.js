import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Title from '../atoms/Title';

const EditableTitle = ({children}) => {
    return <div>
        <Title>{children}</Title>
        <Button>Reset</Button>
    </div>
};

EditableTitle.propTypes = {
    children: PropTypes.element.isRequired
}

export default EditableTitle;