import React, { Component } from "react";
import WeatherWidget from "./components/organisms/WeatherWidget";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.currentConditions = {};
  }
  render() {
    return (
      <div className="App">
        <main>
          <WeatherWidget />
        </main>
      </div>
    );
  }
}

export default App;
