import React,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import './bootstrap.min.css'
import ProdList from './comps/prodList';

//stateful component
class App extends Component{
  render(){
    return (
      <div className="container">
        <ProdList />
      </div>
    )
  }
}



export default App;
