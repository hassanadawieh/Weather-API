import React from "react";
import cloudy from "../img/weather-icons/partlycloudy.svg";
import FakeWeather from "../data/Fakeweather.json"
class Mainweather extends React.Component{
render(){
    return(
    <div className="weather__now">
            <img src={cloudy} className="img__now" />
            <h4 className="p__img">Overcast clouds</h4>
            <p>
              <span><b>Temprature</b></span> {FakeWeather.list[0].main.temp_min}°F to {FakeWeather.list[0].main.temp_max}°F
            </p>
            <p>
              <span><b className="b1">Humidity</b></span>78%<span className="b2"><b>pressure</b> </span>  1008.48
            </p>
          </div>
    )
}
}

export default Mainweather ;