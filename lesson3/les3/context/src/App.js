import React, { Component } from "react";
// import logo from './logo.svg';
import "./bootstrap.min.css";
import { MyContext } from "./data/context";

//stateful component
class App extends Component {
  // state={ counter: 0}

  // add1Counter = () => {
  //   this.setState({counter:this.state.counter+1})
  // }

  render() {
    return (
      <MyContext.Provider
      // value={{
      //   data: this.state,
      //   add1: this.add1Counter,
      //   addX: this.addXCounter
      // }}
      >
        <div className="App container" />
      </MyContext.Provider>
    );
  }
}

export default App;
