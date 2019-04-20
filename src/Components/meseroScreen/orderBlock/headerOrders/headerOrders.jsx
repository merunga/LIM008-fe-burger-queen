import React from 'react';
import './headerOrders.css';

const HeaderOrders = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="title">Pedidos</div>
      </div>
      <div className=" name comm">Cliente:</div>
      <div className="comm client">{props.initial}</div>
      <div className="row justify-content-center">
        <div className="col-5 selection">Descripción</div>
        <div className="col-3 selection">Cantidad</div>
        <div className="col-4 selection">Precio</div>
      </div>
    </div>
  );
};
export default HeaderOrders;
