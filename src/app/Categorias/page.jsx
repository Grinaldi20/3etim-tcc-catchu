"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CardCategoria from "@/components/categorias/card";
import styles from "./page.module.css";
import objetos from "@/mockup/objetos";

export default function Categorias() {
  
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState({
    obj_id: 0,
    categ_id: 0,
    usu_id: 0,
    obj_descricao: "",
    obj_foto: "",
    obj_local_encontrado: "",
    obj_data_publicacao: "",
    obj_status: "",
    obj_encontrado: 0,
  });

  function abrirModal(item) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  const [menuVisible, setMenuVisible] = useState(false);
  const whatsappRef = useRef(null);

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
    <main className={styles.main}>
      <div className={styles.Gradiente}>
        <header className={styles.header}>
          <Link href="TelaPrincipal">
            <Image
              className={styles.img}
              src="/logo1.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          <div className={styles.Pesquisa}>
            <input type="text" placeholder="Pesquisa" />
          </div>

          <div className={styles.Icons}>
            <a href="/Carrinho">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
            </a>

            <a href="/Configuracao">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </a>
          </div>
        </header>

        <h1 className={styles.titulo}>Categorias</h1>
        

        <div className={styles.CardsCarrocel}>
          <a href="/MaterialEscolar">
            <div className={styles.MaterialEscolar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z" />
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
              </svg>
              <h2 className={styles.h2}>Material Escolar</h2>
            </div>
          </a>

          <a href="/Roupas">
            <div className={styles.Roupas}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Z" />
              </svg>
              <h2 className={styles.h2}>Roupas</h2>
            </div>
          </a>

          <a href="/Calcados">
            <div className={styles.Sapatos}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M216-580H88q4-14 10.5-26.5T114-631l154-206q17-23 45.5-30.5T368-861l28 14q21 11 32.5 30t11.5 42v84l74-19q30-8 58 7.5t38 44.5l65 196 170 170q20 20 27.5 43t7.5 49q0 37-20 66t-52 43L354-525q-29-27-64-41t-74-14ZM566-80q-30 0-57-11t-50-31L134-417q-19-17-31-38.5T86-500h130q23 0 44.5 8t38.5 25L703-80H566Z" />
              </svg>
              <h2 className={styles.h2}>Calçados</h2>
            </div>
          </a>

          <a href="/ObjetosGerais">
            <div className={styles.ObjetosGerais}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
                />
              </svg>
              <h2 className={styles.h2}>Objetos Gerais</h2>
            </div>
          </a>

          <a href="/Resgatados">
            <div className={styles.Resgatados}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              <h2 className={styles.h2}>Resgatados</h2>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.CardsItens}>
        {objetos.map((item) => (
          <CardCategoria
            key={item.obj_id}
            obj={item}
            onClick={() => abrirModal(item)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.fechar} onClick={fecharModal}>
              <svg
                fill="#0E6567"
                width="64"
                height="64"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0E6567"
                strokeWidth="0.01024"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
              </svg>
            </div>

            <h1 className={styles.tituloSecao}>
              {itemSelecionado.obj_descricao}
            </h1>
            <Image
              src={itemSelecionado.obj_foto}
              alt={itemSelecionado.obj_descricao}
              width={250}
              height={250}
            />
            <p>
              <strong>Encontrada dia:</strong>
              {itemSelecionado.obj_data_publicacao}
            </p>
            <p>
              <strong>Local:</strong>
              {itemSelecionado.obj_local_encontrado}
            </p>
            <p>
              <strong>Classificação:</strong>
              {itemSelecionado.obj_status}
            </p>
            <button
              onClick={() => {
                try {
                  const key = 'carrinho';
                  const stored = localStorage.getItem(key);
                  const carrinho = stored ? JSON.parse(stored) : [];

                  // evita duplicados pelo id
                  const jaExiste = carrinho.some((it) => it.obj_id === itemSelecionado.obj_id);
                  if (!jaExiste) {
                    carrinho.push(itemSelecionado);
                    localStorage.setItem(key, JSON.stringify(carrinho));
                  }

                  // apenas fecha modal; item já salvo no localStorage
                  setModalAberto(false);
                } catch (err) {
                  console.error('Erro ao reservar item:', err);
                }
              }}
            >
              Reservar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={72}
                height={72}
                className={styles.footerLogo}
              />
            </Link>
            <div>
              <p className={styles.footerTag}>Encontre e reserve itens perdidos</p>
              <p className={styles.footerSmall}>Seguro • Fácil • Local</p>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <a
              href="https://www.instagram.com/catchu.etec/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>



            {/* WHATSAPP */}
            <div
              ref={whatsappRef}
              style={{ position: "relative", display: "inline-block" }}
            >
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
                <div
                  className={`${styles.whatsappMenu} ${menuVisible ? styles.active : ""}`}
                >
                  <a href="https://wa.me/5514998988678" target="_blank" rel="noopener noreferrer">
                    Murilo
                  </a>
                  <a href="https://wa.me/5514998963943" target="_blank" rel="noopener noreferrer">
                    Thiago
                  </a>
                  <a href="https://wa.me/5514999078399" target="_blank" rel="noopener noreferrer">
                    Pedro
                  </a>
                  <a href="https://wa.me/5514991069085" target="_blank" rel="noopener noreferrer">
                    Caiani
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Catchu. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
