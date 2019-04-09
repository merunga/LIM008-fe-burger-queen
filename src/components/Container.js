import React, { useState, useEffect} from 'react';
import User from './user';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import axios from 'axios';

const Container = () => {
    const [menu, setMenu] = useState([]);
    let [options, setOptions] = useState('');
    const [orderItem, setOrderItem] = useState([]);
    let [total, setTotal] = useState(0);
  
    
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

    const calculateTotal = (orderItem) => {
      // const values = orderItem.filter(item => item.price)
      const values = orderItem.reduce((acum, {price}) =>  acum + price, 0)
      setTotal(values)
    }

    const addOrderItem = id => {
      menu.filter(item => {
        return item.id === id ? setOrderItem([...orderItem, item]) : item;
      });
      calculateTotal(orderItem)
    };

    const deleteItem = id => {
      setOrderItem(orderItem.filter(item => item.id !== id))
    };
    
    console.log(total);
    
   
    
  // calculateTotal()


    // const addQuantity = id => {
    //   orderItem.map(item => item.id === id ? )
    //   return setCount(count + 1)
    // };

    return (
      <div>
        <Tabs matchOption={matchOption} />
        <ProductList menu={menu.filter(item => item.category === options)} addOrderItem={addOrderItem} />
        <OrderSummary orderItem={orderItem} deleteItem={deleteItem} totalPrice={total}/>
        <User />
      </div>
    )
};

export default Container;