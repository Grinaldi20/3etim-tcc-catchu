import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function RedesSociais() {
  return (
    <main className={styles.main}>
      <div className={styles.redes}>
        <p className={styles.titulo}>Redes Sociais</p>
      </div>
    </main>
  );
}