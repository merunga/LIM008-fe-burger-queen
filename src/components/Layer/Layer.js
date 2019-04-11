import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Utils/Utils';
import styles from './Layer.module.css';
import Toolbar from '../Header/Toolbar/Toolbar';

const layer = ({ children }) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>
      {children}
    </main>
  </Aux>
);

export default layer;

layer.propTypes = {
  children: PropTypes.element.isRequired,
};
