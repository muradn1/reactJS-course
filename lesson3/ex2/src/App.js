import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProdList from './comps/prodList';

/*stateful component */
class App extends Component {
  state = {
    products_ar: [
      { name: 'Truck toy', price: 30, id: 1 },
      { name: 'Bus toy', price: 40, id: 2 },
      { name: 'Car toy', price: 60, id: 3 }
    ],
    carts_ar: []
  }

  carts_ar = [];

  addItemToCart = (item, e) => {
    let carts_ar = this.state.carts_ar;
    if (!carts_ar.some(item1 => item.id == item1.id)) {
      carts_ar.push(item);
      this.setState({ carts_ar: carts_ar });
    }
  }

  removeitemFromCart = (item, e) => {
    let carts_ar = this.state.carts_ar.filter(item1 => item1.id != item.id);
    this.setState({ carts_ar: carts_ar });

  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-6">
            <h2>Product to buy</h2>
            <ProdList prods={this.state.products_ar} compData={(item) => (<button onClick={(e) => this.addItemToCart(item, e)} className="btn btn-success">add</button>)} />
          </div>
          <div className="col-6">
            <h2>Cart</h2>
            <ProdList prods={this.state.carts_ar} compData={(item) => (<button onClick={(e) => this.removeitemFromCart(item, e)} className="btn btn-danger">remove</button>)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
