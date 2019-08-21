import React,{Component} from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import CounterHooks from './comps/counter_hooks';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer/counterReducer"
import CounterRedux from './comps/counter_redux_hooks';

let store = createStore(reducer);
//stateful component
class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div className="App container">
        {/* <CounterHooks /> */}
        <CounterRedux />
      </div>
      </Provider>
    )
  }
}



export default App;
