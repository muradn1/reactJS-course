import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import './style1.css'
import Coins from "./comps/coins";

/*stateful component */
class App extends Component {

  render() {
    return (
      <div className="App container">
          <Coins />
      </div>
    )
  }
}

export default App;
