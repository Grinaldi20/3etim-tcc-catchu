"use client"

import { useState, useRef, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function TermosUso() {


  const [menuVisible, setMenuVisible] = useState(false);
  const whatsappRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
            className={styles.logoFeedback}
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <div className={styles.voltar}>
            <a href="/Configuracao" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
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
        </div>
        <div className={styles.CardsItens2}>
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


      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={72} height={72} className={styles.footerLogo} />
            </Link>
            <div>
              <p className={styles.footerTag}>Encontre e reserve itens perdidos</p>
              <p className={styles.footerSmall}>Seguro • Fácil • Local</p>
            </div>
          </div>


          <div className={styles.footerSocial}>
            <a href="https://www.instagram.com/catchu.etec/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              {/* ícone simples */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>


            {/* WHATSAPP: wrapper que controla clique e fecha ao clicar fora */}
            <div ref={whatsappRef} style={{ position: "relative", display: "inline-block" }}>
              <a
                href="#"
                aria-label="WhatsApp"
                className={styles.iconLink}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuVisible((v) => !v);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>

              {menuVisible && (
                <div className={`${styles.whatsappMenu} ${menuVisible ? styles.active : ''}`}>
                  <a href="https://wa.me/5514998988678" target="_blank" rel="noopener noreferrer">Murilo</a>
                  <a href="https://wa.me/5514998963943" target="_blank" rel="noopener noreferrer">Thiago</a>
                  <a href="https://wa.me/5514999078399" target="_blank" rel="noopener noreferrer">Pedro</a>
                  <a href="https://wa.me/5514991069085" target="_blank" rel="noopener noreferrer">Caiani</a>
                </div>
              )}
            </div>


          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Catchu. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}