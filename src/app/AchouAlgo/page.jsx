import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function AchouAlgo() {
  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <div className={styles.cardText}>

          <Link href="http://localhost:3000">

            <div className={styles.voltar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </div>
          </Link>




          <h1 className={styles.titulo}>POLÍTICA DE ENTREGA</h1>

          <div className={styles.text}>
            <p className={styles.p}>
              O Catchu assegura as seguintes diretrizes para garantir a organização e a correta devolução aos alunos:
            </p>
            <br />
            <p className={styles.p}>
              Todos os objetos encontrados nas dependências de seu local deverão ser postados e devem ser entregues à administração do mesmo para autorizar a sua publicação.
            </p>
            <br />
            <p className={styles.p}>
              Os objetos permanecerão na seção de Achados e Perdidos por um prazo máximo de 30 dias. Após esse período, os itens não reclamados poderão ser destinados à doação.
            </p>
          </div>
        </div>

        <div className={styles.cardImage}>
          <img className={styles.achou} src="/achou3.png"
            alt="Logo CatchU"
            width={430}
            quality={100}
          />

          <div className={styles.logo}>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={120}
              height={120}
            />

          </div>
        </div>
      </div>

    </main>
  );
}