import React,{Component} from 'react';
import "./bootstrap.min.css"
// import logo from './logo.svg';
import './App.css';
import PeopleList from './comps/peopleList';
import Page2 from './comps/page2';
import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import UserInfo from './comps/userInfo';
import Page404 from './comps/page404';
//stateful component
class App extends Component{
  render(){
    return (
      <div className="container">

        <Router>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/page2"> Page2</Link>
          </nav>
          <Switch>
            <Route exact path={'/'} component={PeopleList} />
            <Route exact path={'/page2'} component={Page2} />
            <Route exact path={'/user/:id'} component={UserInfo} />
            <Route exact path={'*'} component={Page404} />
          </Switch>
        </Router>
        {/* <PeopleList />
        <Page2 /> */}
      </div>
    )
  }
}



export default App;
