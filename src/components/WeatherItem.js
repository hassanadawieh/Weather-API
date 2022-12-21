import React from "react";
import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import Items from "./Items";
import "../App.css"

class WeatherItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="weather__daily">
        {this.props.data.map((e) => (
          <Items
            time={e.dt_txt.slice(10, 16)}
            temp={e.main.temp}
            key={e.dt_txt}
            src={e.weather[0].id}
          />
        ))}
      </div>
    );
  }
}

export default WeatherItem;
