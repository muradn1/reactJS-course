import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Clock from './comps/clock'

/*stateful component */
class App extends Component {
  state = {
    deadline: "2019-12-31"
  }


  changeDate = () => {
    this.setState({ deadline: "2020-01-01" });
  }

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <Clock />
        </div>
        <div className="row justify-content-center">
          <button onClick={this.changeDate} className="btn btn-success">
            change date
          </button>
        </div>
      </div>
    )
  }
}

export default App;
