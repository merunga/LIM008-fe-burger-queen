import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import Header from './components/layout/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <User />
        
      </div>
    )
  }
}

export default App



