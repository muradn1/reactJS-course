import React,{Component} from 'react';
import "./bootstrap.min.css"
// import logo from './logo.svg';
import './App.css';
import PeopleList from './comps/peopleList';


//stateful component
class App extends Component{
  render(){
    return (
      <div className="container">
        <PeopleList />
      </div>
    )
  }
}



export default App;
