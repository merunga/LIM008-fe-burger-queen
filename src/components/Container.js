import React, { useState, useEffect} from 'react';
// import User from './User';
import Tabs from './layout/Tabs';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import axios from 'axios';
import firebase from 'firebase';

const Container = () => {
    const [menu, setMenu] = useState([]);
    let [options, setOptions] = useState('');
    const [orderItems, setOrderItems] = useState([]);
    let [clientsName, setClientsName] = useState('');
  
    useEffect(() => {
      async function fetchDta() {
        const result = await axios('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json');
        setMenu([...result.data, menu])
        setOptions(options = 'breakfast')
      };
    fetchDta()
    }, []);

    const matchOption = option => setOptions(options = option);

    const addOrderItem = id => {
      return menu.filter(item => item.id === id ? setOrderItems([...orderItems, item]) : '')
    };
    

    const deleteItem = id => {
      setOrderItems(orderItems.filter(item => item.id !== id))
    };
    
    const updateItem = (index, item) => {
      const newItems = [...orderItems];
      newItems[index] = item;
      setOrderItems(newItems)

    };

    const updateInput = e => {
      setClientsName(clientsName = e.target.value)
    }
 
    const addUser = e => {
      e.preventDefault();
      const db = firebase.firestore();
      db.collection('users').add({clientsName, orderItems});
      setClientsName(clientsName = '')
    }
    
    
    return (
      <div>
        <Tabs matchOption={matchOption} />
        <ProductList menu={menu.filter(item => item.category === options)} addOrderItem={addOrderItem} />
        <OrderSummary orderItems={orderItems} deleteItem={deleteItem} updateItem={updateItem} />
        <form onSubmit={addUser}>
            <input
              type="text"
              name="name"
              placeholder="Nombre del cliente"
              onChange={updateInput}
              value={clientsName}
            />
            <button type="submit">Enviar a cocina</button>
          </form>
      </div>
    )
};

export default Container;