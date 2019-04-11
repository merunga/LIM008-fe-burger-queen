import React from 'react';

import PropTypes from 'prop-types';
import styles from './NavItem.module.css';

const navItem = ({
  link, active, children,
}) => (
  <li className={styles.NavItem}>
    <a
      href={link}
      className={active ? styles.active : null}
    >
      {children}
    </a>
  </li>
);

export default navItem;

navItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
