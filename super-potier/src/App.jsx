import React, {Component} from 'react';
import logo from './assets/polygon-harry.jpg';
import SearchView from './views/search-view';
import Detail from './views/detail';
import NoMatch from './views/no-match';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="App-title">Welcome to Super Potier Store</h1>
          </header>
          <body className="App-body">
            <Switch>
              <Route exact path="/" component={SearchView}/>
              <Route path="/detail" component={Detail}/>
              <Route component={NoMatch}/>
            </Switch>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
