import styles from './index.module.css';
import { normalizeImageSrc } from '@/utils/normalizeImage';

export default function CardCategoria({ obj, onClick }) {
    const rawSrc = obj?.obj_foto ?? obj?.foto ?? '';
    // Prefer the exact API URL if available and absolute
    const apiRaw = obj?.obj_foto_raw ?? obj?.__raw?.foto ?? null;
    const src = apiRaw && /^https?:\/\//i.test(apiRaw) ? apiRaw : normalizeImageSrc(rawSrc);

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
            <button className={styles.button} onClick={() => onClick(obj)}>Saber Mais</button>
        </div>
    );
}

