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
              <dt className="weather-data__temp--label">Temperature</dt>
              <dd className="weather-data__temp">
                {weatherData.temperature.amount.toFixed(1)}
              </dd>

              <dt className="weather-data__conditions--label">Conditions</dt>
              <dd className="weather-data__conditions">
                {weatherData.text}
                {weatherData.precipitation.isRaining
                  ? ` - ${weatherData.precipitation.amount} mm`
                  : ""}
              </dd>

              <dt className="weather-data__cloud--label">Cloud coverage</dt>
              <dd className="weather-data__cloud">{weatherData.coverage} %</dd>

              <dt className="weather-data__wind--label">Wind</dt>
              <dd className="weather-data__wind">
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
