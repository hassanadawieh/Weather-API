import React, { Component } from "react";
import { render } from "react-dom";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/partlycloudy.svg";
import FakeWeather from "../data/Fakeweather.json";
import "../App.css"
class WeatherItem extends React.Component {
  //   render() {
  //     return <div>Heello</div>;
  //   }
  // }
  // export class SayHello extends Component {
  //   render() {
  //     return (
  //       <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
  //         Hello {this.props.name}
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div className="weather__daily">
        <div>
          
          <p>{this.props.hourlyArray[0]}</p>
          <img src={cloudy} />
          <p>{this.props.tempArray[0] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[1]}</p>
          <img src={cloudy} />
          <p>{this.props.tempArray[1] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[2]} </p>
          <img src={clear} />
          <p>{this.props.tempArray[2] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[3]} </p>
          <img src={clear} />
          <p>{this.props.tempArray[3] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[4]} </p>
          <img src={clear} />
          <p>{this.props.tempArray[4] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[5]} </p>
          <img src={clear} />
          <p>{this.props.tempArray[5] - 273}&deg;C</p>
        </div>
        <div>
          <p>{this.props.hourlyArray[6]}</p>
          <img src={cloudy} />
          <p>{this.props.tempArray[6] - 273}&deg;C</p>
        </div>
      </div>
    );
  }
}
export default WeatherItem;
