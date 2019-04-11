import React from 'react';
import PropTypes from 'prop-types';

const product = ({
  label, price, removed, added,
}) => (
  <div>
    <div>
      <h3>{label}</h3>
      <p>
Precio: /S
        {' '}
        {price}
      </p>
    </div>
    <button
      type="button"
      onClick={removed}
    >
      {' '}
-
    </button>
    <button
      type="button"
      onClick={added}
    >
      {' '}
+
    </button>
  </div>
);

export default product;

product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
};
