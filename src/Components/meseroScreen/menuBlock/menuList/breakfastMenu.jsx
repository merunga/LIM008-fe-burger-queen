import React from 'react';
import './menuList.css';

const BreakfastMenu = ({ data, orders, addingItem }) => {
  return (
    <div>
      {data.map((item) => {
        if (item.categoría === 'Desayuno') {
          return (
            <div key={item.id}>
              <button type="button" onClick={() => addingItem(item, orders)}>{item.nombre}</button>
              <button type="button" onClick={() => addingItem(item, orders)}>{item.precio}</button>
            </div>
          );
        }
      })}
    </div>
  );
};
export default BreakfastMenu;
