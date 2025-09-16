"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CardCategoria from "@/components/categorias/card";
import styles from "./page.module.css";
import objetos from "@/mockup/objetos";

export default function Roupas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(
    {
      "obj_id": 0,
      "categ_id": 0,
      "usu_id": 0,
      "obj_descricao": "",
      "obj_foto": "",
      "obj_local_encontrado": "",
      "obj_data_publicacao": "",
      "obj_status": "",
      "obj_encontrado": 0
    }
  );

  function abrirModal(item) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }


  
    return (
   <div className="main">
    <header className={styles.header}>
        <Link href="http://localhost:3000">  
          <Image
            className={styles.img}
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={100}

          />
                 </Link>

        <div className={styles.Pesquisa}>
            <input type="text" placeholder="Pesquisa"/>
        </div>

        <div className={styles.Icons}>
            <a href="/Carrinho">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                </svg>
            </a>

            <a href="/Configuracao">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </a>
            </div>
    </header>
    <main className={styles.main}>
        <div className={styles.centro}>
            <h1 className={styles.h1}>Roupas</h1>
        </div>

        <div className={styles.CardsItens}>
        {
          objetos.map(item => <CardCategoria obj={item} onClick={() => abrirModal(item)} />)
        }

      </div>

      {/* Modal */}
      {modalAberto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.fechar} onClick={fecharModal}  >
     <svg fill="#0E6567" width="256px" height="256px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" 
     stroke="#0E6567" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
      stroke-linecap="round" stroke-linejoin="round" stroke="#0E6567" stroke-width="26.624000000000002"></g><g 
      id="SVGRepo_iconCarrier"><path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path></g></svg>
            </div>
            <h1 className={styles.tituloSecao}>{itemSelecionado.obj_descricao}</h1>
            <Image src={itemSelecionado.obj_foto} alt={itemSelecionado.obj_descricao} width={250} height={250} />
            <p><strong>Encontrada dia:</strong>{itemSelecionado.obj_data_publicacao}</p>
            <p><strong>Local:</strong>{itemSelecionado.obj_local_encontrado}</p>
            <p><strong>Classificação:</strong>{itemSelecionado.obj_status}</p>
            <button>Reservar</button>
          </div>
        </div>
      )}
     

    
<div className={styles.footer}>
  {/* Imagem à esquerda */}
  <div className={styles.imagem}>
    <Image
      className={styles.img2}
      src="/logo6.png"
      alt="Bolsa preta"
      width={220}
      height={220}
    />
  </div>

  {/* Redes sociais no meio */}
  <div className={styles.redes}>
    <h1 className={styles.fh1}>REDES SOCIAIS</h1>
    <div className={styles.linha2}></div>
    <div className={styles.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..."/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05..."/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048..."/>
      </svg>
    </div>
  </div>

  {/* Contatos à direita */}
  <div className={styles.contatos}>
    <h1 className={styles.fh1}>CONTATOS</h1>
    <div className={styles.linha2}></div>

    <div className={styles.telefone}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0..."/>
      </svg>
      <h2 className={styles.fh2}>+55 14 99874-23742</h2>
    </div>

    <div className={styles.email}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2..."/>
      </svg>
      <h2 className={styles.fh2}>catchu123@gmail.com</h2>
    </div>
  </div>
</div>

    </main>
    </div>
    );
  }