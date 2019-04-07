import React from 'react';
import './layout.css';

const Tabs = ({ matchOption }) => {
  return (
    <ul className="list-group list-group-horizontal-sm col-md-6 text-center">
      <li className="list-group-item list-group-item-action options" onClick={() => matchOption('breakfast')}>Desayuno</li>
      <li className="list-group-item list-group-item-action options" onClick={() => matchOption('menu')}>Menú</li>
      <li className="list-group-item list-group-item-action options" onClick={() => matchOption('drinks')}>Bebidas</li>
    </ul>
  )
}
export default Tabs;

 