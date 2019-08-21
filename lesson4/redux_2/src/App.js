import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
// import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import Rooms from './comps/rooms';
import People from './comps/people';
import Total from './comps/total';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { hotelReducer } from "./reducers/hotelReducer"

const store = createStore(hotelReducer);

/*stateful component */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Rooms />
          <People />
          <Total />
        </div>
      </Provider>
    )
  }
}


export default App;
