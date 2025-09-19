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
   <div className={styles.main}>
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
            <a href="#" aria-label="Instagram" className={styles.iconLink}>
              {/* ícone simples */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.3 1.3.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.3 1.3-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.3-1.3.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 2.1c-3 0-3.4 0-4.6.1-1 .1-1.6.3-2 .5-.5.2-.9.5-1.2.9-.3.4-.6.7-.8 1.2-.2.4-.5 1-.5 2C2.2 9.6 2.2 10 2.2 12s0 2.4.1 3.4c.1 1 .3 1.6.5 2 .2.5.5.9.8 1.2.4.4.8.7 1.2.9.4.2 1 .4 2 .5 1.2.1 1.6.1 4.6.1s3.4 0 4.6-.1c1-.1 1.6-.3 2-.5.5-.2.9-.5 1.2-.9.3-.4.6-.7.8-1.2.2-.4.5-1 .5-2 .1-1 .1-1.4.1-3.4s0-2.4-.1-3.4c-.1-1-.3-1.6-.5-2-.2-.5-.5-.9-.8-1.2-.4-.4-.8-.7-1.2-.9-.4-.2-1-.4-2-.5-1.2-.1-1.6-.1-4.6-.1zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2.1a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zM18.4 6.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"/>
              </svg>
            </a>

            <a href="#" aria-label="Facebook" className={styles.iconLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.9v-2.9h1.6V9.1c0-1.6 1-2.5 2.4-2.5.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.2h1.8l-.3 2.9h-1.5v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} SeuProjeto. Todos os direitos reservados.</p>
        </div>
      </footer>


     
</div>

    );
  }