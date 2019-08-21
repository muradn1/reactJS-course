import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
// import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { coinsReducer } from "./reducer/coinsReducer"
import Form from './comps/form';
import Calculator from './comps/calculator';

const store = createStore(coinsReducer);

const getApi = () => {
  fetch('http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      if (myJson && myJson.quotes) {
        store.dispatch({ type: "update_quotes", val: myJson.quotes })
      }
    });
}


/*stateful component */
class App extends Component {


  constructor(props) {
    super(props);

    this.interval = setInterval(getApi, 5000);
    getApi();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid">
          <div className="row">
            <Form />
            <Calculator />
          </div>
        </div>
      </Provider>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}


export default App;
