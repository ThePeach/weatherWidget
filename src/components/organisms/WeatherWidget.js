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
      <Fragment>
        {isFetching || !weatherData ? (
          <div className="loader">Loading...</div>
        ) : (
          <Fragment>
            <EditableTitle defaultTitle={city} />
            <dl>
              <dt>Temperature</dt>
              <dd>{weatherData.temperature.amount}</dd>
              <dt>Conditions</dt>
              <dd>
                {weatherData.text}
                {weatherData.precipitation.isRaining
                  ? ` - ${weatherData.precipitation.amount}`
                  : ""}
              </dd>
              <dt>Cloud coverage</dt>
              <dd>{weatherData.coverage}</dd>
              <dt>Wind</dt>
              <dd>
                {weatherData.wind.speed} - {weatherData.wind.direction}
              </dd>
            </dl>
          </Fragment>
        )}
      </Fragment>
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
