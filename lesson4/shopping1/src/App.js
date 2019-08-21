import React,{Component} from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import ProdList from './comps/prodList';
import {shopProduct_ar} from "./data/super_json";


//stateful component
class App extends Component{
  prods_ar = shopProduct_ar;

  render(){
    return (
      <div className="App container">
        <div className="row">
        <div className="col-6 border">
          asdasw
          </div>
          <div className="col-6 border">
            <ProdList prods_ar={this.prods_ar} />
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
