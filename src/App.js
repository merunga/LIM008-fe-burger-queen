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
    fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json')
    .then(resp => resp.json())
    .then(data => {
      setMenu(menu.concat(data))  
      setOptions(options = 'breakfast')
    }) 
  }, []);

  const matchOption = option => {
    return setOptions(options = option);
  };
  
  return (
    <div>
      <Header />
      <Tabs matchOption={matchOption} />
      <ProductList menu={menu.filter(item => item.category === options)}/>
      <User />
      <Amount />
    </div>
  )
};

{/* <Tabs filtered={options} matchOption={matchOption} /> */}

export default App;



