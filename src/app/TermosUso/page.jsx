import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function TermosUso() {
  return (
    <div>
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
          <a href="/Configuracao" >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
      </a>
      </div>
        </header>

        <div className={styles.tituloContainer}>
          <h1 className={styles.titulo}>Termos de Usos</h1>
        </div>

        <div className={styles.CardsItens}>
          <div className={styles.Cards}>
           
            <h2>1</h2>
           <p className={styles.p1}> Ao acessar e utilizar o CatchU, você concorda em cumprir e estar sujeito aos 
            presentes Termos de Uso. Caso não concorde com qualquer condição estabelecida neste documento, 
            não utilize o site.</p>

          </div>

          <div className={styles.Cards}>
           
            <h2>2</h2>
            <p className={styles.p2}> Você é inteiramente responsável pelo conteúdo das publicações realizadas, incluindo descrição,
               É proibido publicar conteúdo falso, ofensivo, ilegal, ou que viole direitos de terceiros.
               </p>

          </div>

          <div className={styles.Cards}>
           
            <h2>3</h2>
            <p className={styles.p3}> Em caso de dúvidas ou sugestões, entre em contato através do e-mail ou redes sociais .
Ao utilizar o CatchU, você declara que leu, 
compreendeu e concorda com os presentes Termos de Uso.</p>

          </div>

          <div className={styles.Cards}>
           
            <h2>4</h2>
            <p className={styles.p4}>            
Respeitar outros usuários e agir de forma ética , educada e respeitosa.
Não divulgar informações pessoais de terceirossemautorização,
Não realizar atividades fraudulentas, Esperamos a compreensão de todos. </p>
           
          </div>
       
          <div className={styles.Cards}>
          
            <h2>5</h2>
           <p className={styles.p5}> Para publicar ou interagir no site, você deve criar uma conta fornecendo
             informações verdadeiras , completas e atualizadas. Você é responsável por manter a confidencialidade das
              credenciais de acesso.</p>

          </div>

          <div className={styles.Cards}>
           
            <h2>6</h2>
            <p className={styles.p6}> Todo o conteúdo presente no site, incluindo textos, imagens, logotipos e 
              layout, é protegido por direitos autorais e não pode ser reproduzido sem autorização. Violado tomaremos providências.</p>

            </div>

          </div>
           </div>
         
    </div>
  );
}