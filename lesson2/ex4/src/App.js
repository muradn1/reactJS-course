import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Vip from "./comps/vip"

/*stateful component */
class App extends Component {
  state = {
    deadline: "2019-12-31"
  }


  changeDateApp = (_newDate) => {
    this.setState({ deadline: _newDate });
  }

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <Vip />
        </div>
        <div className="row justify-content-center">
        </div>
      </div>
    )
  }
}

export default App;
