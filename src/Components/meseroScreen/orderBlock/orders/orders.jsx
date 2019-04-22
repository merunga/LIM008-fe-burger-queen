import React from 'react';
import PropTypes from 'prop-types';
import './orders.css';

const Orders = ({ orders, trashOrder, setOrder }) => {
  const plusOne = (id) => {
    const newOrders = orders.map((e) => {
      if (e.id === id) {
        const newElem = { ...e };
        newElem.cantidad += 1;
        return newElem;
      }
      return e;
    });
    setOrder(newOrders);
  };
  const minusOne = (elem, id) => {
    const newOrders = orders.map((e) => {
      if (e.id === id) {
        const newElem = { ...e };
        newElem.cantidad -= 1;
        return newElem;
      }
      return e;
    });
    setOrder(newOrders);
  };
  return (orders.map(elem => (
    <div key={elem.id}>
      <div>
        {elem.nombre}
        <button type="button" onClick={() => trashOrder(elem.id)}><i className="fas fa-trash-alt" /></button>
        <button type="button" onClick={() => plusOne(elem.id)}><i className="fas fa-plus-circle" /></button>
        <div>{elem.cantidad}</div>
        <button type="button" onClick={() => minusOne(elem, elem.id)}><i className="fas fa-minus-circle" /></button>
        <div>{elem.cantidad * elem.precio}</div>
      </div>
    </div>
  )));
};
export default Orders;
Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  trashOrder: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};
