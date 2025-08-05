import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function Feedback() {
  return (
    <>
      <Head>
        <title>Feedback</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.pageWrapper}>
        <header className={styles.topoFeedback}>
          <Image
            src="/logo1.png"
            alt="Logo Catch"
            width={100}
            height={100}
            className={styles.img}
          />
          <div  className={styles.voltar}>
          <a href="/Configuracao" >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
      </a>
      </div>
        </header>

        <div className={styles.tituloContainer}>
          <h1 className={styles.titulo}>Feedback</h1>
        </div>

        <main className={styles.main}>
          <form className={styles.form}>
            <h2 className={styles.formTitle}>
              <strong>AVALIE NOSSO SITE</strong>
            </h2>

            <div className={styles.avaliacaoContainer}>
              <div className={styles.avaliacao}>
                <input type="radio" name="estrela" id="estrela5" value="5" />
                <label htmlFor="estrela5" className={styles.estrela}>
                  &#9733;
                </label>

                <input type="radio" name="estrela" id="estrela4" value="4" />
                <label htmlFor="estrela4" className={styles.estrela}>
                  &#9733;
                </label>

                <input type="radio" name="estrela" id="estrela3" value="3" />
                <label htmlFor="estrela3" className={styles.estrela}>
                  &#9733;
                </label>

                <input type="radio" name="estrela" id="estrela2" value="2" />
                <label htmlFor="estrela2" className={styles.estrela}>
                  &#9733;
                </label>

                <input type="radio" name="estrela" id="estrela1" value="1" />
                <label htmlFor="estrela1" className={styles.estrela}>
                  &#9733;
                </label>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.textareaGroup}`}>
              <textarea
                name="mensagem"
                id="mensagem"
                placeholder="Deixe sua avaliação aqui..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.button}>
              AVALIAR
            </button>
          </form>
        </main>
      </div>
    </>
  );
}