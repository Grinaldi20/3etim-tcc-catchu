import Image from "next/image";
import styles from "./page.module.css";

export default function PoliticaRetirada() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* TEXTOS */}
        <div className={styles.cardText}>
          <a className={styles.a} href="../TelaP.html">
            <div className={styles.backArrow}>
              <span className={styles.materialOutlined}>arrow_back_ios</span>
            </div>
          </a>
          <h1 className={styles.h1}>POLÍTICA DE RETIRADA</h1>

          <h3 className={styles.h3}>
            O CatchU assegura as seguintes diretrizes para a retirada de objetos
            encontrados e armazenados na seção de Achados e Perdidos, garantindo
            a organização e a correta devolução aos alunos:
          </h3>

          <h3 className={styles.h3}>
            Para a retirada de um objeto da seção de Achados e Perdidos, o aluno deverá: <br />
            - Informar seu nome completo;<br />
            - Informar sua sala/turma;
          </h3>

          <h3 className={styles.h3}>
            A equipe da biblioteca registrará a entrega do objeto, anotando os
            dados do aluno e a data da retirada, como forma de controle interno.
          </h3>
        </div>

        {/* IMAGEM ILUSTRATIVA */}
        <div className={styles.cardImage}>
          <Image
            src="/opcao.png"
            alt="Ilustração de retirada"
            width={250}
            height={250}
            quality={100}
          />
          
          <div className={styles.logo}>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={200}
              height={100}
              quality={100}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
