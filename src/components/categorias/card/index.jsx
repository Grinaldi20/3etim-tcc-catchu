import Image from 'next/image';
import styles from './index.module.css';

export default function CardCategoria({ obj, onClick }) {
    return (
        <div className={styles.Cards}>

            <Image src={obj.obj_foto}
                alt="Blusa Azul"
                width={170}
                height={165}
            />

            <div className={styles.linha}></div>
            <h3 className={styles.h3}>{obj.obj_descricao}</h3>
            <button className={styles.button} onClick={() => onClick(obj)}>Saber Mais</button>
        </div>
    );
}