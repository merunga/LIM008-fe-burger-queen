import React from 'react';
//  import Items from '../Items';

const Tabs = ({ onclick }) => {
  return (
    <ul>
      <li onClick={() => onclick('breakfast')}>Desayuno</li>
      <li onClick={() => onclick('menu')}>Menú</li>
      <li onClick={() => onclick('drinks')}>Bebidas</li>
    </ul>
  )
}
export default Tabs;

 