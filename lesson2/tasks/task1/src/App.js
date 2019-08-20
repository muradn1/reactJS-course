import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import './style1.css'
import Products from "./comps/products";

/*stateful component */
class App extends Component {

  render() {
    return (
      <div className="App all_site">
          <Products />
      </div>
    )
  }
}

export default App;
