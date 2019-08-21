import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import Cart from './comps/cart';
import OrderSummary from './comps/orderSummary';
// import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import { shopProduct_ar } from "./data/super_json";
import { MyContext } from "./data/context";


/*stateful component */
class App extends Component {
  state = {
    products: shopProduct_ar.slice(0, 4).map(item => {
      item.qty = 0;
      return item;
    })
  }

  render() {
    return (
      <MyContext.Provider value={{ data: this.state }}>
        <div className="App container">
          <div className="row">
            <OrderSummary className="col-6" />
            <Cart products={this.state.products} className="col-6" />
          </div>
        </div>
      </MyContext.Provider>

    )
  }
}

export default App;
