import React, { Component } from "react";
//import Search from "./components/Search";

//import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
//import MyName from "./components/MyName";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/partlycloudy.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "London",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>London</h1>
          <button>FIND WEATHER</button>
        </header>
        <section className="app__main">
          <div className="weather__now">
            <img src={cloudy} className="img__now" />
            <h4 className="p__img">Overcast clouds</h4>
            <p>
              <span><b>Temprature</b></span> 10° to 11°C
            </p>
            <p>
              <span><b className="b1">Humidity</b></span>78%<span className="b2"><b>pressure</b> </span>  1008.48
            </p>
          </div>
          <div className="weather__daily">
            <div>
              <p>03:00 </p>
              <img src={cloudy} />
              <p>8°C</p>
            </div>
            <div>
              <p>06:00 </p>
              <img src={cloudy} />
              <p>9°C</p>
            </div>
            <div>
              <p>09:00 </p>
              <img src={clear} />
              <p>14°C</p>
            </div>
            <div>
              <p>12:00 </p>
              <img src={clear} />
              <p>17°C</p>
            </div>
            <div>
              <p>15:00 </p>
              <img src={clear} />
              <p>18°C</p>
            </div>
            <div>
              <p>18:00 </p>
              <img src={clear} />
              <p>16°C</p>
            </div>
            <div>
              <p>21:00 </p>
              <img src={cloudy} />
              <p>13°C</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
