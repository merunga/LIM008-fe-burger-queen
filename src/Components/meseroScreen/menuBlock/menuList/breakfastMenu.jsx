import React from 'react';
import PropTypes from 'prop-types';
import './menuList.css';

const BreakfastMenu = ({ data, orders, addingItem }) => (
  <div data-testid="container-breakfast">
    {data.map((item) => {
      if (item.categoría === 'Desayuno') {
        return (
          <div key={item.id}>
            <button type="button" className="btn" data-testid={`${item.id}-breakfast`} onClick={() => addingItem(item, orders)}>{item.nombre}</button>
          </div>
        );
      }
      return null;
    })}
  </div>
);
export default BreakfastMenu;
BreakfastMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  addingItem: PropTypes.func.isRequired,
};
