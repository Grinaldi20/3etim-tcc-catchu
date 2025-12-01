import styles from './index.module.css';
import { normalizeImageSrc } from '@/utils/normalizeImage';

export default function CardSobre({ desc, onClick }) {
    const src = normalizeImageSrc(desc?.desc_foto ?? '');

    return (
      <div className={styles.teamCard}>
        <img
          src={src}
          alt={desc?.desc_nome || 'Foto'}
          width={300}
          height={220}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.teamCardContent}>
          <h3 className={styles.teamName}>{desc.desc_nome}</h3>
          <p className={styles.teamRole}>{desc.desc_espec}</p>
          <p className={styles.teamDesc}>{desc.desc_func}</p>
          <button className={styles.button} onClick={() => onClick(desc)}>Ver</button>
        </div>
      </div>
    );
}

