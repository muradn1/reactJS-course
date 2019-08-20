import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
// import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import { MyContext } from "./data/context"
import Floor2 from './comps/floor2';

/*stateful component */
class App extends Component {
  state = {
    counter: 999
  }

  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  addXCounter = (_x) => {
    this.setState({ counter: this.state.counter + _x });
  }
  render() {
    return (
      <MyContext.Provider value={{ data: this.state, add1: this.addCounter, addX: this.addXCounter }}>
        <div className="App container">
          <Floor2 />
        </div>
      </MyContext.Provider>
    )
  }
}

export default App;
