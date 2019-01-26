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
    const { currentCity, weatherData } = this.props;

    return (
      <Fragment>
        {currentCity ? <EditableTitle defaultTitle={currentCity} /> : ""}
        {weatherData ? (
          <Fragment>
            <div>Temperature {weatherData.temperature.amount}</div>
            <div>Conditions: {weatherData.text}</div>
            <div>
              {weatherData.precipitation.isRaining
                ? weatherData.precipitation.amount
                : ""}
            </div>
            <div>Cloud coverage: {weatherData.coverage}</div>
          </Fragment>
        ) : (
          "no data"
        )}
      </Fragment>
    );
  }
}

WeatherWidget.propTypes = {
  currentCity: PropTypes.string,
  weatherData: PropTypes.shape({
    temperature: {
      amount: PropTypes.string
    },
    text: PropTypes.string,
    coverage: PropTypes.string,
    precipitation: {
      isRaining: PropTypes.bool,
      amount: PropTypes.string
    },
    wind: {
      speed: PropTypes.string,
      direction: PropTypes.string
    }
  })
};

WeatherWidget.defaultProps = {
  currentCity: null,
  weatherData: null
};

const mapStateToProps = (state /*, ownProps */) => {
  return {
    currentCity: `${state.city.name}, ${state.city.country}`,
    weatherData: state.weatherData
  };
};

const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget);
