import React,{Component} from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import ProdList from './comps/prodList';
import {shopProduct_ar} from "./data/super_json";
import Cart from './comps/cart';


//stateful component
class App extends Component{
  state = {cart_ar:[
    {name:"apple",price:5,qty:2},
    {name:"banana",price:4,qty:3}
  ]}
  prods_ar = shopProduct_ar;

  updateCart = (_ar) => {
    console.log(this.prods_ar);
    this.setState({cart_ar:_ar})
  }

  render(){
    return (
      <div className="App container">
        <div className="row">
        <div className="col-6 border">
          <Cart  cart_ar={this.state.cart_ar}/>
          </div>
          <div className="col-6 border">
            <ProdList updateCart={this.updateCart} prods_ar={this.prods_ar} />
          </div>
        </div>
      </div>
    )
  }
}

// stateless component
// function App() {
//   return (
//     <div className="App">
//       <h2>React work!</h2>
//       <img src="logo192.png" />
//     </div>
    
//   );
// }

export default App;
