import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import BtnSaibaMais from '../Button/BtnSaibaMais';
import Footer from '../Footer/Footer';

function Home() {

  return (
    <div>
      <Navbar />

      <div className={styles.imgContainer}>
        <img src="/logotipo-cdz.png" alt="Logotipo CDZ" />
      </div>

      <div className={styles.imgContainer}>
        <img src="/banner-cdz.png" alt="Banner CDZ" />
      </div>

      <p className={styles.title}>Conheça o mundo de Saint Seiya!</p>
      <BtnSaibaMais />
      <iframe
        style={{
          borderRadius: '20px',
          marginTop: '-90px',
        }}
        src="https://open.spotify.com/embed/playlist/7ErWVzX0GpHJE0GHWWP52S?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <Footer />
    </div>
  );
}

export default Home;
