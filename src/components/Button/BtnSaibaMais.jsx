import React from 'react';
import styles from './BtnSaibaMais.module.css';
import { Link } from 'react-router-dom';

function BtnSaibaMais() {
    return (
        <Link to="/Sobre">
            <div className={styles.container}>
                <button className={styles.btnsaibamais}>Saiba mais</button>
            </div>
        </Link>
    );
}  

export default BtnSaibaMais;
