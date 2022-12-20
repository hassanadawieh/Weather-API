import React from "react";
import cloudy from "../img/weather-icons/partlycloudy.svg";
import FakeWeather from "../data/Fakeweather.json";
import "../App.css"
class Mainweather extends React.Component {
  render() {
    return (
      <div className="weather__now">
        <img src={cloudy} className="img__now" />
        <h4 className="p__img">{this.props.MainweatherDesc}</h4>
        <p>
          <span>
            <b>Temprature</b>
          </span>{" "}
          {this.props.tempMin} &deg; to {this.props.tempMax}&deg;
        </p>
        <p>
          <span>
            <b className="b1">Humidity</b>
          </span>
          {this.props.humidity}%
          <span className="b2">
            <b>pressure</b>{" "}
          </span>{" "}
          {this.props.pressure}
        </p>
      </div>
    );
  }
}

export default Mainweather;
