import styles from './Sobre.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'; 

function Sobre () {
    return (
        <div>
            <Navbar />
            
            <div className={`${styles.parentContainer} ${styles.imgContainer}`}>
                {/* Use o Link para criar um link para a página inicial */}
                <Link to="/Home">
                    <img src="/logotipo-cdz.png" alt="Logotipo CDZ" />
                </Link>
            </div>

            <h1 className={styles.titulosobre}>Sobre o Anime | Cavaleiros do Zodíaco</h1>
        
        <div className={styles.containermain}>
            <main className={styles.main}>
            <p className={styles.txtsobre}>"Cavaleiros do Zodíaco" (Saint Seiya) é um anime e mangá japonês criado por Masami Kurumada. A história foi originalmente serializada no mangá de 1986 a 1990 e, posteriormente, adaptada para uma série de anime que foi ao ar de 1986 a 1989. A franquia se tornou um fenômeno global, com uma legião de fãs ao redor do mundo.</p>
            <p className={styles.txtsobre}>A trama se desenrola em um mundo fictício, onde um grupo de jovens guerreiros conhecidos como Cavaleiros do Zodíaco defende a deusa Atena contra forças malignas que ameaçam a paz na Terra. Cada cavaleiro usa uma armadura inspirada em uma das constelações zodiacais e possui habilidades especiais relacionadas a ela.</p>
            <p className={styles.txtsobre}>A história começa com Seiya de Pégaso, o protagonista, sendo enviado ao Santuário de Atena para participar de um torneio conhecido como "Torneio Galáctico". O vencedor do torneio ganha o direito de vestir a Sagrada Armadura de Ouro e se tornar o Cavaleiro de Ouro de Pégaso, o mais poderoso entre os cavaleiros. No entanto, eventos inesperados ocorrem durante o torneio, levando Seiya e seus amigos - Shiryu de Dragão, Hyoga de Cisne, Shun de Andrômeda e Ikki de Fênix - a enfrentarem inimigos cada vez mais poderosos.</p>
            <p className={styles.txtsobre}>Ao longo da série, os Cavaleiros do Zodíaco enfrentam diversas ameaças cósmicas, como os Cavaleiros de Prata, os Cavaleiros de Ouro renegados e as forças malignas lideradas por vilões como Saga, Shura, Camus e Poseidon. A trama também explora o passado dos personagens principais e a verdade por trás das batalhas épicas que travam em nome da deusa Atena.</p>
            <p className={styles.txtsobre}>Uma das características marcantes do anime é a intensidade das batalhas, que muitas vezes envolvem técnicas de luta sobrenaturais, conhecidas como "Cosmo", uma espécie de energia vital que os cavaleiros podem canalizar para aumentar suas habilidades. Além disso, a série aborda temas como amizade, coragem, sacrifício e redenção.</p>
            <p className={styles.txtsobre}>Ao longo dos anos, "Cavaleiros do Zodíaco" gerou várias séries derivadas, spin-offs, filmes e outras mídias, consolidando-se como uma das franquias mais icônicas e duradouras do mundo dos animes e mangás.</p>
            </main>
        <div className={styles.imgContainer}>
            <img src="/saori-kido.png" alt="Saori Kido" />
        </div>
    </div>
        <Footer />
    </div>
    );
}

export default Sobre;