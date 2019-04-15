import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import PropTypes from 'prop-types';
import Product from './Product';
import db from '../../lib/firestore';
import styles from './ProductsArea.module.css';
import Spinner from '../common/Spinner';

const ProductsArea = ({
  removedProduct, addedProduct,
}) => {
  const { error, loading, value } = useCollection(
    db().collection('/dining').orderBy('type', 'asc'),
  );

  return (
    <div className={styles.productsArea}>
      <h3>Selecciona el producto de preferencia: </h3>
      {error && (
      <strong>
Error:
        {' '}
        {error}
      </strong>
      )}
      {loading && <Spinner />}
      {value && (
      <div>
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
