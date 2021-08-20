import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <picture className={styles.logo}>
          <img src={logo} alt="reddit timer logo" />
        </picture>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/search?query=javascript">Search</Link></li>
          <li><Link to="/#how-it-works">How it works</Link></li>
          <li><Link to="/#about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
