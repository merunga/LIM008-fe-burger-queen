import React from 'react';
import PropTypes from 'prop-types';
import './headerOrders.css';

const HeaderOrders = ({ nameInitial, setName }) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="title">Pedidos</div>
    </div>
    <form onSubmit={e => e.preventDefault()}>
      <div className="name common">Cliente:</div>
      <input className="common input" value={nameInitial.name} onChange={e => setName({ ...nameInitial, name: e.currentTarget.value })} data-testid="name-customer" />
    </form>
    <div className="row justify-content-center ">
      <div className="col-5 border"><p>Descripción</p></div>
      <div className="col-4 border">Cantidad</div>
      <div className="col-3 border ">Precio</div>
    </div>
  </div>
);
export default HeaderOrders;
HeaderOrders.propTypes = {
  nameInitial: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};
