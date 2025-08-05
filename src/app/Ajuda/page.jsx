import Head from 'next/head';
import Image from 'next/image';

import styles from './page.module.css';

export default function Ajuda() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Termos de Uso</title>
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
            width={3500}
            height={220}
            className={styles.logoFeedback}
          />
          <div  className={styles.voltar}>

                  
       <Link href="http://localhost:3000/Configuracao">      
           
    
     
    
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>

</Link>
    
      </div>
        </header>

        <div className={styles.tituloContainer}>
          <h1 className={styles.titulo}>Ajuda</h1>
        </div>

        <div>

<details className={styles.details}>
  <summary className={styles.summary}>
    Como recuperar algo perdido?
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.chevron} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  </summary>
  <div className={styles.info}>
    Procure no site por seu produto perdido em categorias ou pesquisando. Colocar o local e data que perdeu pode
     te ajudar! Assim que encontrar no aplicativo, reserve o produto e vá até a secretária administrativa do local e
      retire o produto com seus dados.
  </div>
</details>


<details className={styles.details}>
  <summary className={styles.summary}>
   O que fazer quando achar algo perdido?
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.chevron} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  </summary>
  <div className={styles.info}>
   Caso você encontre um item perdido, você pode registrá-lo diretamente no nosso site, informando o local, 
   data e uma breve descrição do objeto. Assim, o dono poderá encontrá-lo com mais facilidade.
  </div>
</details>

<details className={styles.details}>
  <summary className={styles.summary}>
    Defeito no nosso site?
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.chevron} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  </summary>
  <div className={styles.info}>
   Se você encontrou algum problema no funcionamento do nosso site (como erro de carregamento,
    falha ao postar ou buscar um item), envie uma mensagem para o nosso suporte através do e-mail 
    [Catchu2025@gmail.com] ou pelo formulário de contato disponível na página de ajuda. Se possível, 
    anexe uma imagem do erro e descreva o que aconteceu.
  </div>
</details>

<details className={styles.details2}>
  <summary className={styles.summary}>
    Como excluir uma uma conta?
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.chevron} viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  </summary>
  <div className={styles.info}>
   Você pode excluir sua conta diretamente pelo site. Basta fazer login, acessar a área de configurações
    da conta e clicar na opção "Excluir conta". A exclusão é permanente, e todos os seus dados e publicações
     serão removidos da plataforma.
  </div>
</details>

<div className={styles.Contatos}>
<h1 className={styles.h1}>Contatos</h1>

<h2 className={styles.h2}>55+ 1483923-6423</h2>

<h2 className={styles.h2}>Catchu2025@gmail.com</h2>

</div>


        </div>

       </div>
    </main>
  );
}