import React from 'react';
import PropTypes from 'prop-types';
import './menuList.css';

const RestOfTheDayMenu = ({ data, orders, addingItem }) => (
  <div data-testid="container-restoftheday">
    {data.map((item) => {
      if (item.categoría === 'Resto del día') {
        return (
          <button type="button" className="btn" onClick={() => addingItem(item, orders)} data-testid={`${item.id}-restday`}>{item.nombre}</button>
        );
      }
      // return null;
    })}
  </div>
);
export default RestOfTheDayMenu;
RestOfTheDayMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  addingItem: PropTypes.func.isRequired,
};
