import React, { useState, useEffect} from 'react';
import User from './user';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';

const Container = () => {
    const [menu, setMenu] = useState([]);
    let [options, setOptions] = useState('');
    let [id, setId] = useState(null);
    // const [order, setOrder] = useState([]);
  
    useEffect(() => {
     fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json')
      .then(resp => resp.json())
      .then(data => setMenu(menu.concat(data)))
      .then(() => setOptions(options = 'breakfast'))
         
    }, []);

    const matchOption = option => {
        return setOptions(options = option);
    };
    
    const addOrder = id => {
        menu.map(item => {
          if(item.id === id) {
            setId(id)
          }
          return item;
        })
    };

    return (
     <div>
      <Tabs matchOption={matchOption} />
      <ProductList menu={menu.filter(item => item.category === options)} addOrder={addOrder}/>
      <OrderSummary newProduct={menu.filter(item => item.id === id)}/>
      <User />
     </div>
    )
};

export default Container;