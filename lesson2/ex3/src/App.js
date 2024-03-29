import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Clock from './comps/clock'
import UserInput from './comps/userInput'

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
          <Clock time={this.state.deadline} />
        </div>
        <div className="row justify-content-center">
          <UserInput changeDate={this.changeDateApp} />
        </div>
      </div>
    )
  }
}

export default App;
