import React, { Component } from "react";
import WeatherWidget from "./components/organisms/WeatherWidget";
import "./styles/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.currentConditions = {};
  }
  render() {
    return (
      <div className="app">
        <main>
          <WeatherWidget />
        </main>
      </div>
    );
  }
}

export default App;
