import React, {Component} from 'react';
import logo from './assets/polygon-harry.jpg';
import SearchView from './views/search-view';
import Detail from './views/detail';
import BasketDetail from './views/basket-detail';
import NoMatch from './views/no-match';
import Basket from './components/basket';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './styles';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="App-title">Welcome to Super Potier Store</h1>
            <Basket/>
          </header>
          <body className="App-body">
            <Switch>
              <Route exact path="/" component={SearchView}/>
              <Route path="/detail/:isbn" component={Detail}/>
              <Route path="/basket/detail" component={BasketDetail}/>
              <Route component={NoMatch}/>
            </Switch>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
