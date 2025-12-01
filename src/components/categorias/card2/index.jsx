import styles from './index.module.css';
import { normalizeImageSrc } from '@/utils/normalizeImage';

export default function CardCategoria({ obj, onClick }) {
    const src = normalizeImageSrc(obj?.foto ?? obj?.obj_foto ?? '');

    return (
        <div className={styles.Cards}>

            <img
                src={src}
                alt={obj?.obj_descricao ?? 'imagem'}
                width={170}
                height={165}
                style={{ objectFit: 'cover' }}
            />

            <div className={styles.linha}></div>
            <h3 className={styles.h3}>{obj.obj_descricao}</h3>
            <button className={styles.button} onClick={() => onClick(obj)}>Resgatado</button>
        </div>
    );
}

