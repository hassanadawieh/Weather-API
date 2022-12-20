import React from "react";
import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";
import "../App.css";
class Search extends React.Component {
  //   state = {
  //     input: ""
  //   };

  //   render() {
  //     return (
  //       <div>
  //         {this.state.input}
  //         <input
  //           type="text"
  //           id="input-name"
  //           onChange={event => {
  //             this.setState({ input: event.target.value });
  //           }}
  //         />
  //         <button
  //           onClick={event => {
  //             this.props.handleInput(this.state.input);
  //           }}
  //         >
  //           Say Hello
  //         </button>
  //       </div>
  //     );
  //   }
  render() {
    return (
      <header className="app__header">
        <input typeof="text" placeholder="London"></input>
        <button>FIND WEATHER</button>
      </header>
    );
  }
}
export default Search;
