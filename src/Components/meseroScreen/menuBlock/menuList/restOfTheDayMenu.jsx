import React from 'react';
import './menuList.css';

const RestOfTheDayMenu = ({ data, orders, addingItem }) => {
  return (  
    <div>
      {data.map((item) => {
        if (item.categoría === 'Resto del día') {
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
export default RestOfTheDayMenu;
