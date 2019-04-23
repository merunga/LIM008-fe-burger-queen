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
    <div className="container-fluid">
      <div key={elem.id} className="row justify-content-center">
        <div className="col-5 col-sm-5 comm description">{elem.nombre}</div>
        <div className="col-4 col-sm-4 comm options">
          <button type="button" className="comm selection" onClick={() => plusOne(elem.id)}><i className="fas fa-plus-circle" /></button>
          <div className="comm description">{elem.cantidad}</div>
          <button type="button" className="comm selection" onClick={() => minusOne(elem, elem.id)}><i className="fas fa-minus-circle" /></button>
          <button type="button" className="comm selection" onClick={() => trashOrder(elem.id)}><i className="fas fa-trash-alt" /></button>
        </div>
        <div className="col-3 col-sm-3 comm description">{elem.cantidad * elem.precio}</div>
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
