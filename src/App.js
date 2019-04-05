import React, { Component } from 'react';
import User from './components/user';
import Header from './components/layout/Header';
import Tabs from './components/layout/Tabs';
import './App.css';
// import Breakfast from './components/Breakfast';


class App extends Component {
  state = {
    menu: []
  };
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/develop/src/data/menu.json')
     .then(resp => resp.json())
     .then(json =>this.setState({ menu: json }))
  }
  


  render() {
    return (
      <div>
        <Header />
        <Tabs menu={this.state.menu} />
        <User />
        
      </div>
    )
  }
}

export default App



