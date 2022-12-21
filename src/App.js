import React, { Component ,  setState }  from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import Mainweather from "./components/Mainweather";
import FakeWeather from "./data/Fakeweather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDay: FakeWeather,
      isLoaded: false
    }
  }
  fetchData = (n) => {
    let fetchData = `http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=ce8c46325e27b55982188b9bacdff1a6`;
    fetch(fetchData)
    // .then(res => res.json())
    // .then(data => {console.log(data); this.setState({allDay: data}); this.setState({isLoaded: true})})
    .then(res => {return res.json();
  })
  .then(data => {
    if(data.cod!='200'){
      alert('PLease enter a valid name')

    }
    else{
      {console.log(data); this.setState({allDay: data}); this.setState({isLoaded: true})}

    }
  }
  )

  }

  render() {
    return (
      <div className="app">
        <Search event={this.fetchData}/>
        <main>
          {this.state.isLoaded && <Mainweather
            des={this.state.allDay.list[0].weather[0].description}
            minT={this.state.allDay.list[0].main.temp_min}
            maxT={this.state.allDay.list[0].main.temp_max}
            humidity={this.state.allDay.list[0].main.humidity}
            pressure={this.state.allDay.list[0].main.pressure}
            src={this.state.allDay.list[0].weather[0].id} />}
          {this.state.isLoaded && <WeatherItem data={this.state.allDay.list.slice(1, 7)} />}
        </main>
      </div>
    );
}}
//step 7 is already done with step 6 
export default App;
 
