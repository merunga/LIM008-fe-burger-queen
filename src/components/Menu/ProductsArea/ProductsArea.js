import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import PropTypes from 'prop-types';
import Product from './Product';
import db from '../../../services/firestore';
import styles from './ProductsArea.module.css';

const ProductsArea = ({
  removedProduct, addedProduct,
}) => {
  const { error, loading, value } = useCollection(
    db.collection('/dining').orderBy('type', 'asc'),
  );

  return (
    <div className={styles.productsArea}>
      {error && (
      <strong>
Error:
        {' '}
        {error}
      </strong>
      )}
      {loading && <span>Loading...</span>}
      {value && (
      <div>
            Selecciona Producto de Preferencia:
        {' '}
        {value.docs.map(doc => (
          <Product
            key={doc.id}
            label={doc.data().label}
            price={doc.data().price}
            removed={() => removedProduct(doc.id)}
            added={() => addedProduct(doc.id, doc.data().price, doc.data().label)}
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default ProductsArea;

ProductsArea.propTypes = {
  removedProduct: PropTypes.func.isRequired,
  addedProduct: PropTypes.func.isRequired,
};
