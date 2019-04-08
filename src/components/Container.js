import React, { useState, useEffect} from 'react';
import User from './user';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';

const Container = () => {
    const [menu, setMenu] = useState([]);
    let [options, setOptions] = useState('');
    const [orderItem, setOrderItem] = useState([]);
  
    useEffect(() => {
     fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json')
      .then(resp => resp.json())
      .then(data => setMenu([...data, menu]))
      .then(() => setOptions(options = 'breakfast')) 
    }, []);

    const matchOption = option => setOptions(options = option);
    
    const addOrderItem = id => {
      menu.filter(item => {
        return item.id === id ? setOrderItem([...orderItem, item]) : item;
      });
    };

    const deleteItem = id => {
      setOrderItem(orderItem.filter(item => item.id !== id))
    };

    return (
      <div>
        <Tabs matchOption={matchOption} />
        <ProductList menu={menu.filter(item => item.category === options)} addOrderItem={addOrderItem} />
        <OrderSummary newOrderItem={orderItem} deleteItem={deleteItem}/>
        <User />
      </div>
    )
};

export default Container;