import React, { Component } from "react";
import { render } from "react-dom";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/partlycloudy.svg";
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

render(){
  return(
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
  )
}
}
export default WeatherItem;