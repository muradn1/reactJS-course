import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Counter from './comps/counter';
// import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = { counter: 40 };

const store = createStore(reducer);

function reducer(state = initState, action) {
  console.log(action);
  switch(action.type){
    case "add":{
      return { counter: state.counter + 1 }
    }
    case "dec":{
      return { counter: state.counter - 1 }
    }

    default:{
      return state;
    }
  }
}

// store.dispatch({type:"add"})

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <h2>Welcome to redux</h2>
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App;
