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
            <p className={styles.title}>Conheça o mundo de Saint Seiya!</p>
            <BtnSaibaMais />
            <div className={styles.imgCavaleiros}>
                <img src="image 2camus-aquario.png" alt="Camus de Aquário"/> 
                <img src="image 3saga-gemeos.png" alt="Saga de Gêmeos"/> 
                <img src="image 4kanon-gemeos.png" alt="Kanon de Gêmeos"/> 
            </div>
            <Footer />
        </div>
    );
}

export default Home;
