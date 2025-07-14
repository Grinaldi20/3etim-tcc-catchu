import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Carrinho() {
    return (
     <main className={styles.main}>
  <div className={styles.container}>
    <div className={styles.header}>
      <a href="../TelaP.html">
      <span className={styles.backArrow}>&#8592;</span>
      </a>
     <h1 className={styles.h1}>Reservados</h1>
    </div>

    <div className={styles.item}>
       <Image 
                src="/bolsa.png"
                 width={90}
                 height={90}  
                 alt="Bolsa termica vermelha"
                 quality={100}
      />
      
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>Bolsa térmica vermelha</div>
        <div className={styles.itemText}>Encontrada dia: 09/08/2024</div>
        <div className={styles.itemText}>Local: Refeitório</div>
        <div className={styles.itemText}>Classificação: Objetos gerais</div>
        <button className={styles.reservdBtn}>Reservado</button>
      </div>
    </div>
    
    <div className={styles.item}>
      <Image 
                src="/fone.png"
                 width={90}
                 height={90}  
                 alt="Fone de ouvido"
                 quality={100}
      />
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>Fone de ouvido Iphone branco</div>
        <div className={styles.itemText}>Encontrada dia: 09/08/2024</div>
        <div className={styles.itemText}>Local: Refeitório</div>
        <div className={styles.itemText}>Classificação: Objetos gerais</div>
        <button className={styles.reservdBtn}>Reservado</button>
      </div>
    </div>


    <div className={styles.item}>
        <Image 
                src="/caderno.png"
                 width={90}
                 height={90}  
                 alt="Caderno rosa"
                 quality={100}
      />
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>Caderno rosa neon da Tilibra</div>
        <div className={styles.itemText}>Encontrada dia: 09/08/2024</div>
        <div className={styles.itemText}>Local: Refeitório</div>
        <div className={styles.itemText}>Classificação: Objetos gerais</div>
        <button className={styles.reservdBtn}>Reservado</button>
      </div>
    </div>

    <div className={styles.footer}></div>
  </div>
</main>
    );
  }