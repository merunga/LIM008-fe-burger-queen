import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import BreakfastMenu from './menuBlock/menuList/breakfastMenu';
import RestOfTheDayMenu from './menuBlock/menuList/restOfTheDayMenu';
import Orders from './orderBlock/orders/orders';
import HeaderOrders from './orderBlock/headerOrders/headerOrders';
import './menuBlock.css';
import firebase from '../../firebaseConfig';

export const db = firebase.firestore();
const Waiter = () => {
  const [nameInitial, setName] = useState({ name: '' });
  const [orders, setOrder] = useState([]);
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  // firebase.firestore().enablePersistence()
  // .then(function() {
  // Initialize Cloud Firestore through firebase
  // const db = firebase.firestore();
  useEffect(() => {
    db.collection('Menú').get()
      .then((json) => {
        const doc = [];
        json.forEach((docu) => {
          doc.push(docu.data());
        });
        setData(doc);
      });
  }, []);
  // });
  const addingItem = (item, order) => {
    const itemOrder = order.find(elem => elem.id === item.id);
    return itemOrder ? setOrder([...order]) : setOrder([item, ...order]);
  };

  const trashOrder = (id) => {
    const dataUpdate = orders.filter(order => order.id !== id);
    return setOrder([...dataUpdate]);
  };

  const calculateTotal = (order) => {
    const total = order.map(e => e.cantidad * e.precio).reduce((sum, value) => sum + value, 0);
    return total;
  };

  const saveOrder = () => db.collection('Orders').add({
    Nombre: nameInitial,
    Productos: orders,
    Precio: calculateTotal(orders),
    Fecha: Date(),
  });
  return (
    <div>
      <Header />
      <div className="first block">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="title">Menú</div>
          </div>
          <div className="row justify-content-center">
            <button type="button" className="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-1 selection" onClick={() => setMenu(!menu)} data-testid="render-breakfast">Desayuno</button>
            <button type="button" className="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-1 selection" onClick={() => setMenu(!menu)}>Resto del día</button>
          </div>
        </div>
        <div>
          {menu ? <BreakfastMenu data={data} addingItem={addingItem} orders={orders} /> : (<RestOfTheDayMenu data={data} addingItem={addingItem} orders={orders} />)}
        </div>
      </div>
      <HeaderOrders nameInitial={nameInitial} setName={setName} />
      <Orders orders={orders} setOrder={setOrder} trashOrder={trashOrder} />
      <div className="common selection">
        <div className="common">Total:</div>
        {calculateTotal(orders)}
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <button type="button" className="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 selection" onClick={() => setOrder([])}>Anular orden</button>
          <button type="button" className="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 selection" onClick={() => saveOrder()}>Enviar a cocina</button>
        </div>
      </div>
    </div>
  );
  // })
};
export default Waiter;
