import Image from 'nest/image';
import styles from './index.module.css';

export default function card ({categorias}) {
    return (
        <div className={styles.Cards}>
            <Image src="/bolsa.png" alt="Blusa Azul" width={170} height={165} />
             <div className={styles.linha}></div>
            <h3 className={styles.h3}>Bolsa Vermelha</h3>
            <button className={styles.button} onClick={abrirModal}>Saber Mais</button>
        </div>
    );
          }