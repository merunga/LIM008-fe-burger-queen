import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/user';
import Header from './components/layout/Header';
import Tabs from './components/layout/Tabs';
import ProductList from './components/ProductList';
import Amount from './components/order';


const App = () => {
  const [menu, setMenu] = useState([]);
  let [options, setOptions] = useState('');
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/2ba3df5cbef051f1557745e2e24645d44a33375e/src/data/menu.json')
    .then(resp => resp.json())
    .then(data => {
      setMenu(menu.concat(data))  
      setOptions(options = 'breakfast')
    }) 
  }, []);

  const filteredList = filter => {
    return setOptions(options = filter);
  };
  
  return (
    <div>
      <Header />
      <Tabs filtered={options} onclick={filteredList} />
      <ProductList menu={menu.filter(item => item.category === options)}/>
      <User />
      <Amount />
    </div>
  )
};

export default App;



