import React, { Component } from "react";
import Search from "./components/Search";
import Mainweather from "./components/Mainweather"
//import SayHi, { SayHello } from "./components/WeatherItem";
import FakeWeather from "./data/Fakeweather.json";
//import MyName from "./components/MyName";
// import clear from "./img/weather-icons/clear.svg";
// import cloudy from "./img/weather-icons/partlycloudy.svg";
import WeatherItem from "./components/WeatherItem"
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather,

    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search/>
        <section className="app__main">
          <Mainweather />
          <WeatherItem/>
        </section>
      </div>
    );
  }
}

export default App;
