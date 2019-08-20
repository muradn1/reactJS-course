import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
/*stateful component */
class App extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark pink lighten-3 mb-4">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline mr-auto">
            <div class="md-form my-0">
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
              <i class="fas fa-search text-white ml-3" aria-hidden="true"></i>
            </div>
          </form>
        </div>
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>
    )
  }
}

export default App;
