import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import React, { Component } from "react";
import "../App.css";
import FakeWeather from "../data/Fakeweather.json";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";

class Mainweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = FakeWeather;
  }
  render() {
    const idSrc = (id) => {
      if (id < 300) return storm;
      else if (id >= 300 && id <= 499) return drizzle;
      else if (id >= 500 && id <= 599) return rain;
      else if (id >= 600 && id <= 699) return snow;
      else if (id >= 700 && id <= 799) return fog;
      else if (id === 800) return clear;
      else if (id === 801) return partlycloudy;
      else if (id >= 801 && id <= 805) return mostlycloudy;
    };
    return (
      // <div className="weather">
      //   <img src={idSrc(this.props.src)} />
      //   <span className="title titles">{this.props.des}</span>
      //   <span className="title firsttitle">
      //     <b>Temperature</b> {Math.round(this.props.minT)} &deg;C to{" "}
      //     {Math.round(this.props.maxT)} &deg;C
      //   </span>
      //   <p className="title medium-title">
      //     <b>Humidity</b> {this.props.humidity} % <b>Pressure</b>{" "}
      //     {this.props.pressure}{" "}
      //   </p>
      // </div>
      <div className="weather__now">
          <img src={idSrc(this.props.src)} className="img__now" />
          <h4 className="p__img">{this.props.des}</h4>
          <p>
            <span><b>Temprature</b></span> {Math.round(this.props.minT)}°C to {Math.round(this.props.maxT)}°F
          </p>
          <p>
            <span><b className="b1">Humidity</b></span>{this.props.humidity}%<span className="b2"><b>pressure</b></span>   {this.props.pressure}
          </p>
        </div>
    );
  }
}
export default Mainweather;
