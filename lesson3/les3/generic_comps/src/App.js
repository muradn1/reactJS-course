import React,{Component} from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import ProdList from './comps/prodList';
// import Header from './comps/header';

//stateful component
class App extends Component{
  products_ar = [
    {name:"Truck toy",price:30,id:1},
    {name:"Bus toy",price:40,id:2},
    {name:"Car toy",price:60,id:3}
  ]

  addProd = (e) => {
    let prodId = e.target.dataset.id;
    //alert(prodId)

     this.products_ar.push({name:this.products_ar[prodId-1].name, price:this.products_ar[prodId-1].price , id:this.products_ar.length+1})
     this.forceUpdate()
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Product to buy</h2>
            <ProdList prods={this.products_ar} compData={(item) => (
              
              <button data-id={item.id} onClick={this.addProd} className="btn btn-success">add</button>
            )} />
          </div>
          <div className="col-6">
            <h2>Cart</h2>
            <ProdList prods={this.products_ar} 
             />
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
