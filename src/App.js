import React, { Component } from "react";
import Search from "./components/Search";
import Mainweather from "./components/Mainweather";
//import SayHi, { SayHello } from "./components/WeatherItem";
import FakeWeather from "./data/Fakeweather.json";
//import MyName from "./components/MyName";
// import clear from "./img/weather-icons/clear.svg";
// import cloudy from "./img/weather-icons/partlycloudy.svg";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather,
    };
  }
  render() {
    function hoursArray(FakeWeather) {
      let hours = [];
      for (let i = 5; i <= 11; i++) {
        hours.push(FakeWeather.list[i].dt_txt.slice(11, 16));
      }
      return hours;
    }
    function temArray(FakeWeather) {
      let temp = [];
      for (let i = 5; i <= 11; i++) {
        temp.push(FakeWeather.list[i].main.temp.toFixed());
      }
      return temp;
    }


    return (
      <div className="app">
        <Search />
        <section className="app__main">
          <Mainweather
           
            tempMin={(
              this.state.FakeWeather.list[4].main.temp_min - 273.15
            ).toFixed()}
            tempMax={(
              this.state.FakeWeather.list[4].main.temp_max - 273.15
            ).toFixed()}
            humidity={this.state.FakeWeather.list[4].main.humidity}
            pressure={this.state.FakeWeather.list[4].main.pressure}
          />
          <WeatherItem
            hourlyArray={hoursArray(this.state.FakeWeather)}
            tempArray={temArray(this.state.FakeWeather)}
            
          />
        </section>
      </div>
    );
  }
}
export default App;
