import Image from 'next/image';
import styles from './index.module.css';

export default function CardSobre({ desc, onClick }) {
    return (
     <div className={styles.teamGrid}>
 <div className={styles.teamCard}>
          <Image 
          src={desc.desc_foto} 
          alt="Murilo Grinaldi"
          width={150}
          height={150}
          
          />
          <div className={styles.teamCardContent}>
            <h3 className={styles.teamName}>{desc.desc_nome}</h3>
            <p className={styles.teamRole}>{desc.desc_espec}</p>
            <p className={styles.teamDesc}>
             {desc.desc_func}
            </p>

            <button className={styles.button} onClick={() => onClick(desc)}>Ver</button>
          </div>
        </div>
</div>

    );
}

