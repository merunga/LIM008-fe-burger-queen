import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAQNbFOa0UnZlatTijqIuxBf1sbLlZ2CeU",
  authDomain: "burger-queen-600e5.firebaseapp.com",
  databaseURL: "https://burger-queen-600e5.firebaseio.com",
  projectId: "burger-queen-600e5",
  storageBucket: "burger-queen-600e5.appspot.com",
  messagingSenderId: "432037519073"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
