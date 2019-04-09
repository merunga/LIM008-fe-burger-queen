import React, { useState, useEffect} from 'react';
import User from './user';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import axios from 'axios';

const Container = () => {
    const [menu, setMenu] = useState([]);
    let [options, setOptions] = useState('');
    const [orderItems, setOrderItems] = useState([]);
    // let [total, setTotal] = useState(0);
    console.log(orderItems);
    
    useEffect(() => {
      async function fetchDta() {
        const result = await axios('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json');
        setMenu([...result.data, menu])
        setOptions(options = 'breakfast')
      };
    fetchDta()
    }, []);

    const matchOption = option => setOptions(options = option);

    // const calculateTotal = (orderItem) => {
    //   let sum = 0;
    //   setTotal(orderItem.forEach(({price}) => sum += price))
    //   total = sum
    // }

    // const calculateTotal = (orderItem) => {
      // const values = orderItem.filter(item => item.price)
    //   const values = orderItem.reduce((acum, {price}) =>  acum + price, 0)
    //   setTotal(values)
    // }

    const addOrderItem = id => {
      return menu.filter(item => item.id === id ? setOrderItems([...orderItems, item]) : item);
      // calculateTotal(orderItem)
    };

    const deleteItem = id => {
      setOrderItems(orderItems.filter(item => item.id !== id))
    };
    
    const updateItem = (index, item) => {
      const newItems = [...orderItems];
      newItems[index] = item;
      setOrderItems(newItems)
    }
    
   
    
  // calculateTotal()


    // const addQuantity = id => {
    //   orderItem.map(item => item.id === id ? )
    //   return setCount(count + 1)
    // };

    return (
      <div>
        <Tabs matchOption={matchOption} />
        <ProductList menu={menu.filter(item => item.category === options)} addOrderItem={addOrderItem} />
        <OrderSummary orderItems={orderItems} deleteItem={deleteItem} updateItem={updateItem} />
        <User />
      </div>
    )
};

export default Container;