import React, {Component} from 'react';
import logo from './logo.svg';
import List from './components/list.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Super Potier Store</h1>
        </header>
        <body className="App-body">
          <List/>
        </body>
      </div>
    );
  }
}

export default App;
