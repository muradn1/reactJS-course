import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Header from './comps/header';
import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';

/*stateful component */
class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App container">
        <Header />
        <h2>Welcome to class of react!</h2>
        <p>bla bla bla</p>
      </div>
    )
  }
}

/*stateless component */
// function App() {
//   return (
//     <div className="App">
//       <h2>React work!</h2>
//       <img src="logo192.png" alt="logo"/>
//     </div>
//   );
// }

export default App;
