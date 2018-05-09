import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormAuthoriz from './FormAuthoriz.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <div className="jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <FormAuthoriz /> 
            </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
