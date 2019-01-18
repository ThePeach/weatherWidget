import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../molecules/EditableTitle';

const WeatherWidget = ({currentCity}) => {
    return <EditableTitle defaultTitle={currentCity}/>
}

WeatherWidget.propTypes = {
    currentCity: PropTypes.string.isRequired
}

export default WeatherWidget;
