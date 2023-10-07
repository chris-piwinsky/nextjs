import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>Your footer content goes here.</p>
      </div>
    </footer>
  );
};

export default Footer;