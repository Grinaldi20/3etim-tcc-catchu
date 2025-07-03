import Image from "next/image";
import styles from "./page.module.css";


export default function PoliticaRetirada() {
  return (
    <main className={styles.main}>
      {/* Ícone de voltar */}
     

      <div className={styles.container}>
        <a href="/" className={styles.voltar}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
      </a>
        {/* Texto à esquerda */}
        <div className={styles.texto}>
           
          <h1 className={styles.titulo}>POLÍTICA DE RETIRADA</h1>
          <h2 className={styles.paragrafo}>
            O CatchU assegura as seguintes diretrizes para a retirada de objetos encontrados e armazenados na seção de Achados e Perdidos, garantindo a organização e a correta devolução aos alunos:
          </h2>
          <h2 className={styles.paragrafo}>
            Para a retirada de um objeto da seção de Achados e Perdidos, o aluno deverá:
            <br />• Informar seu nome completo;
            <br />• Informar sua sala/turma;
          </h2>
          <h2 className={styles.paragrafo}>
            A equipe da biblioteca registrará a entrega do objeto, anotando os dados do aluno e a data da retirada, como forma de controle interno.
          </h2>
        </div>

        {/* Imagem à direita */}
        <div className={styles.imagem}>
          <Image
            src="/opcao2.png"
            alt="Ilustração de retirada"
            width={250}
            height={250}
            className={styles.ilustracao}
            quality={100}
            priority
          />

          <Image
            src="/logo1.png"
            alt="Logo CatchU"
            width={120}
            height={120}
            className={styles.logo}
            quality={100}
          />
        </div>
      </div>
    </main>
  );
}
