// Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <a className={styles.linksnavbar} href="#">Home</a>
            <a className={styles.linksnavbar} href="#">Sobre</a>
            <a className={styles.linksnavbar} href="#">Cavaleiros</a>
        </div>
    );
}

export default Navbar;
