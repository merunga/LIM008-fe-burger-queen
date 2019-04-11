import React from 'react';

import styles from './NavBar.module.css';
import NavItem from './NavItem/NavItem';

const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/" active>MENÚ</NavItem>
    <NavItem link="/">ORDENES</NavItem>
  </ul>
);

export default navBar;
