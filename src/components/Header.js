import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <picture>
        <img src={logo} alt="reddit timer logo" />
      </picture>
      <ul className={styles.links}>
        <li><Link to="/search?query=javascript">Search</Link></li>
        <li><Link to="/#how-it-works">How it works</Link></li>
        <li><Link to="/#about">About</Link></li>
      </ul>
    </header>
  );
}

export default Header;
