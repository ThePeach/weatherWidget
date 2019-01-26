import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCity } from "../../redux/actions";
import EditableTitle from "../molecules/EditableTitle";

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    console.log(props.currentCity);
  }

  componentDidMount() {
    const { fetchCity } = this.props;
    fetchCity("London");
  }

  render() {
    const { currentCity, weatherData } = this.props;
    let temperature, text, coverage, precipitation;
    if (weatherData) {
      const { temperature, text, coverage, precipitation } = weatherData;
    }

    return (
      <Fragment>
        {currentCity ? <EditableTitle defaultTitle={currentCity} /> : ""}
        {weatherData ? (
          <Fragment>
            <div>
              {temperature.amount} - feels like {temperature.feel}
            </div>
            <div>Conditions: {text}</div>
            <div>{coverage}%</div>
            <div>
              Rain: {precipitation.isRaining ? precipitation.amount : "none"}
            </div>
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
      amount: PropTypes.string,
      feel: PropTypes.string
    },
    text: PropTypes.string,
    coverage: PropTypes.string,
    precipitation: {
      isRaining: PropTypes.bool,
      amount: PropTypes.string
    }
  })
};

WeatherWidget.defaultProps = {
  currentCity: null,
  weatherData: null
};

const mapStateToProps = (state /*, ownProps */) => {
  return {
    currentCity: state.city.english,
    weatherData: state.weatherData
  };
};

const mapDispatchToProps = { fetchCity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget);
