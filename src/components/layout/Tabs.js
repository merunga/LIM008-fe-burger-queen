import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Tabs = ({ matchOption }) => (
  <ul className="list-group list-group-horizontal-sm col-md-6 text-center">
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('breakfast')}>Desayuno</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('menu')}>Menú</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('accompaniment')}>Acompañamientos</button>
    <button type="button" className="list-group-item list-group-item-action options" onClick={() => matchOption('drinks')}>Bebidas</button>
  </ul>
);
export default Tabs;

Tabs.propTypes = {
  matchOption: PropTypes.func.isRequired,
};
