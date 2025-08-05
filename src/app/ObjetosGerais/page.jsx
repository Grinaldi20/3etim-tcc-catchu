import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
export default function ObjetosGerais() {
    return (
   <div>
    <header className={styles.header}>
        <Link href="/TelaP">
                   <Image className={styles.img} src="/logo1.png" alt="Logo" width={420} height={235} quality={100} />
                 </Link>

        <div className={styles.Pesquisa}>
            <input type="text" placeholder="Pesquisa"/>
        </div>

        <div className={styles.Icons}>
            <a href="CARRINHO/carrinho.html">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
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
            <h1 className={styles.h1}>Objetos Gerais</h1>
        </div>

        <div className={styles.CardsItens}>
            <div className={styles.Cards}>
                 <Image src="/timao.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Camisa Corinthians</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
               <Image src="/timao2.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Estojo</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
               <Image src="/timao3.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Moletom</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
                <Image src="/timao4.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Boné</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>
        </div>
        <div className={styles.CardsItens}>
            <div className={styles.Cards}>
               <Image src="/timao5.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Pulseira</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
                <Image src="/timao6.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Meia</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
               <Image src="/timao7.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Meia</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>

            <div className={styles.Cards}>
              <Image src="/timao8.png" alt="Estojo" width={170} height={165} />
                <div className={styles.linha}></div>
                <h3 className={styles.h3}>Short Azul</h3>
                <button className={styles.button}>Saber Mais</button>
            </div>
        </div>
    </main>
    </div>
    );
  }