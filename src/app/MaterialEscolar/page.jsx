import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
export default function MaterialEscolar() {
    return (
   <div>
    <header className={styles.header}>
        <Link href="http://localhost:3000">  
                   <Image
            className={styles.img}
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={100}

          />
                 </Link>

        <div className={styles.Pesquisa}>
            <input type="text" placeholder="Pesquisa"/>
        </div>

        <div className={styles.Icons}>
            <a href="/Carrinho">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                </svg>
            </a>

            <a href="/Configuracao">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </a>
            </div>
    </header>
    <main className={styles.main}>
        <div className={styles.centro}>
            <h1 className={styles.h1}>Material Escolar</h1>
        </div>

        <div className={styles.CardsItens}>
            <div className={styles.Cards}>
                 <Image src="/estojo3.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Estojo</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
               <Image src="/caderno.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Caderno</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
               <Image src="/regua.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Regua</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
                <Image src="/caderno3.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Caderno</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>
        </div>

       <div className={styles.footer}>
        <div className={styles.contatos}> 
<h1 className={styles.fh1} >CONTATOS</h1>
<div className={styles.linha2}></div>
<h2 className={styles.fh2}>+55 149987423742</h2>
<h2 className={styles.fh2}>catchu123@gmail.com</h2>
</div>

<div className={styles.RedesSociais}>
<h1 className={styles.fh1}>Redes Socias</h1>
<div className={styles.linha2}></div>
<div className={styles.icon}>
    <div></div>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
</div>


</div>



       </div>
    </main>
    </div>
    );
  }