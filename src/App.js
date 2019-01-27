import React, { Component } from "react";
import WeatherWidget from "./components/organisms/WeatherWidget";
import "./styles/main.scss";

class App extends Component {
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
