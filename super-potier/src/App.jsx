import React, {Component} from 'react';
import logo from './assets/polygon-harry.jpg';
import SearchView from './views/search-view';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Super Potier Store</h1>
        </header>
        <body className="App-body">
          <SearchView/>
        </body>
      </div>
    );
  }
}

export default App;
