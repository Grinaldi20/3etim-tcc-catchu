import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Carrinho() {
    return (
     <main className={styles.main}>
  <div className={styles.container}>
    <div className={styles.header}>
               
       <Link href="http://localhost:3000">      

       <div className={styles.backArrow}>
       <svg  
       xmlns="http://www.w3.org/2000/svg" 
       width="16" 
       height="16" 
       fill="currentColor"  
       viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
</div>

</Link>
     
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