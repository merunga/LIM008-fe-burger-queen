import React from 'react';
import PropTypes from 'prop-types';
import './orders.css';

const Orders = ({ orders, trashOrder, setOrder }) => {
  const plusOne = (orders, id) => {
      const copyArr = [...orders];
      const filterId = copyArr.find(elem => elem.id === id);
      
      // return filterId;
      // newArr.cantidad += 1;
      // setOrder([...newArr]);
    };
  const minusOne = (elem, id) => {
    if (id === elem.id) {
      elem.cantidad -= 1;
      setOrder([...orders]);
    }
  };
  return (orders.map(elem => (
    <div>
      <div>
        {elem.nombre}
        <button type="button" onClick={() => trashOrder(elem.id)}><i className="fas fa-trash-alt" /></button>
        <button type="button" onClick={() => plusOne(orders, elem.id)}><i className="fas fa-plus-circle" /></button>
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
