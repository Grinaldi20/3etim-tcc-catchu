import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function PoliticaRetirada() {
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
          <h1 className={styles.titulo}>POLÍTICA DE RETIRADA</h1>

          <div className={styles.text}>
            <p className={styles.p}>
              O CatchU assegura as seguintes diretrizes para a retirada de objetos encontrados e armazenados
              na seção de Achados e Perdidos, garantindo a organização e a correta devolução aos alunos:
            </p>
            <br />
            <p className={styles.p}>
              Para a retirada de um objeto da seção de Achados e Perdidos, o aluno deverá:
              <br />• Informar seu nome completo;
              <br />• Informar sua sala/turma;
            </p>
            <br />
            <p className={styles.p}>
              A equipe da biblioteca registrará a entrega do objeto, anotando os dados do aluno
              e a data da retirada, como forma de controle interno.
            </p>
          </div>
        </div>

        <div className={styles.cardImage}>
          <img className={styles.achou} src="/opcao2.png"
            alt="Logo CatchU"
            width={430}
            height={700}
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