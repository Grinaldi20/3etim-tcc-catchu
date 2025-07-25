import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";



export default function Dados() {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                
               
                <Link href="/Configuracao" className={styles.backArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </Link>

                <div className={styles.verde}>
                    <Image
                        className={styles.ImgMaior}
                        src="/logo1.png"
                        width={400}
                        height={250}
                        alt="Logo Maior"
                        quality={100}
                    />
                </div>

                <div className={styles.formGroup}>
                    <h1 className={styles.h2}> Anonimo de Santos </h1>
                </div>
                <div className={styles.formGroup}>
                    <h1 className={styles.h2}> anonimo.santos@gmail.com </h1>
                </div>
                <div className={styles.formGroup}>
                    <h1 className={styles.h2}> ETIM </h1>
                </div>
                <div className={styles.formGroup}>
                    <h1 className={styles.h2}> Senha : ******* </h1>
                </div>

                <div className={styles.junto}>
                    <button className={styles.button}>Alterar Senha</button>
                    <button className={styles.button}>Excluir Conta</button>
                </div>
            </form>
        </main>
    );
}
