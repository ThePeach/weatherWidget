import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchData } from "../../redux/actions";
import EditableTitle from "../molecules/EditableTitle";

class WeatherWidget extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData("London");
  }

  render() {
    const { currentCity, currentCountry, weatherData, isFetching } = this.props;
    const city = `${currentCity}, ${currentCountry}`;

    return (
      <div className="weather-widget">
        {isFetching || !weatherData ? (
          <div className="loader">Loading...</div>
        ) : (
          <Fragment>
            <EditableTitle defaultTitle={city} />
            <dl className="weather-data">
              <dt>Temperature</dt>
              <dd>{weatherData.temperature.amount}ºC</dd>
              <dt>Conditions</dt>
              <dd>
                {weatherData.text}
                {weatherData.precipitation.isRaining
                  ? ` - ${weatherData.precipitation.amount} mm`
                  : ""}
              </dd>
              <dt>Cloud coverage</dt>
              <dd>{weatherData.coverage} %</dd>
              <dt>Wind</dt>
              <dd>
                {weatherData.wind.speed} m/s - {weatherData.wind.direction}º
              </dd>
            </dl>
          </Fragment>
        )}
      </div>
    );
  }
}

WeatherWidget.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  currentCity: PropTypes.string,
  currentCountry: PropTypes.string,
  weatherData: PropTypes.object
};

WeatherWidget.defaultProps = {
  isFetching: true,
  currentCity: null,
  weatherData: null
};

const mapStateToProps = (state /*, ownProps */) => {
  return {
    isFetching: state.isFetching,
    currentCity: state.city.name,
    currentCountry: state.city.country,
    weatherData: state.weatherData
  };
};

const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget);
