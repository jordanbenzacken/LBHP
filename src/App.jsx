import React, { Component } from 'react';
import SearchView from './views/search-view';
import Detail from './views/detail';
import BasketDetail from './views/basket-detail';
import NoMatch from './views/no-match';
import Header from './components/header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <body className="App-body">
            <Switch>
              <Route exact path="/" component={SearchView} />
              <Route path="/detail/:isbn" component={Detail} />
              <Route path="/basket/detail" component={BasketDetail} />
              <Route component={NoMatch} />
            </Switch>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
