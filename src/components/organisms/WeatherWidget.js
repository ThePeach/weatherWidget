import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../molecules/EditableTitle';

const WeatherWidget = ({currentCity}) => {
    return <EditableTitle>{currentCity}</EditableTitle>
}

WeatherWidget.propTypes = {
    currentCity: PropTypes.string.isRequired
}

export default WeatherWidget;
