
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CardCategoria from "@/components/categorias/card2";
import styles from "./page.module.css";
import axios from "axios";

export default function MaterialEscolar() {
  const [modalAberto, setModalAberto] = useState(false);
  const [reservados, setReservados] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const whatsappRef = useRef(null);

  // 🔥 CARREGAR OS ITENS RESERVADOS DO LOCALSTORAGE
  useEffect(() => {
<<<<<<< HEAD
    async function carregarResgatados() {
      try {
        // 1. Pega IDs finalizados
        const fStored = localStorage.getItem("finalizados");
        const finalizados = fStored ? JSON.parse(fStored) : [];

        if (finalizados.length === 0) {
          setReservados([]);
          return;
        }

        // 2. Busca todos os objetos do banco
        const res = await fetch("http://localhost:3333/objetos");
        const json = await res.json();

        /*
          A API pode retornar um array diretamente ou um objeto com a forma:
            { sucesso: true, dados: [ ... ] }
          Se fizermos `const objetos = await res.json()` e assumirmos que é um
          array, pode ocorrer `filter is not a function` quando for um objeto.
          Então normalizamos para `allObjects` que será sempre um array.
        */
        const allObjects = Array.isArray(json)
          ? json
          : Array.isArray(json?.dados)
          ? json.dados
          : [];

        // 3. Filtra somente os que estão em finalizados
        // Normaliza ids para string para evitar problema de tipos
        const finalizadosSet = new Set((finalizados || []).map((id) => String(id)));

        const filtrados = allObjects.filter((obj) => {
          const objId = String(obj?.obj_id ?? obj?.id ?? "");
          return finalizadosSet.has(objId);
        });

        setReservados(filtrados);

      } catch (error) {
        console.error("Erro ao carregar objetos finalizados:", error);
        setReservados([]);
      }
    }

    carregarResgatados();
=======
    const stored = localStorage.getItem("carrinho");
    const carrinho = stored ? JSON.parse(stored) : [];
    setReservados(carrinho);
>>>>>>> parent of 3277c69 (ja resgatado)
  }, []);

  // fechar menu whatsapp
  useEffect(() => {
    function handleClickOutside(event) {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function abrirModal(item) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  // 🔥 EXCLUIR ITEM DEFINITIVAMENTE DO LOCALSTORAGE
async function excluirItem(id) {
  console.log("➡️ Enviando DELETE para:", `http://localhost:3333/objetos/${id}`);

  if (typeof window === "undefined") return;

  try {
    // 🔥 1) EXCLUI DO BANCO
    console.log("ID enviado:", id, "Tipo:", typeof id);
    await axios.delete(`http://localhost:3333/objetos/${id}`);

    // 🔥 2) Remove do carrinho (localStorage)
    const stored = localStorage.getItem("carrinho");
    let carrinho = stored ? JSON.parse(stored) : [];
    carrinho = carrinho.filter((item) => item.obj_id !== id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // 🔥 3) Salvar ID no "finalizados"
    const finalizados = JSON.parse(localStorage.getItem("finalizados")) || [];
    if (!finalizados.includes(id)) {
      finalizados.push(id);
      localStorage.setItem("finalizados", JSON.stringify(finalizados));
    }

    // 🔥 4) Remove da tela imediatamente
    setReservados((prev) => prev.filter((obj) => obj.obj_id !== id));

    // 🔥 5) Fecha modal
    setModalAberto(false);

  } catch (err) {
    console.error("Erro ao excluir item:", err);
  }
}




  return (
    <div className="main">
      <header className={styles.header}>
        <Link href="TelaPrincipal">
          <Image className={styles.img} src="/logo1.png" alt="Logo" width={100} height={100} />
        </Link>

        <div className={styles.Icons}>
          <a href="/Carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16">
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
            </svg>
          </a>

          <a href="/Configuracao">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.centro}>
          <h1 className={styles.h1}>Resgatados</h1>
        </div>

        {/* 🔥 Agora renderizando APENAS os reservados do localStorage */}

        
        <div className={styles.CardsItens}>
          {reservados.map((item) => (
            <CardCategoria
              key={item.obj_id}
              obj={item}
              onClick={() => abrirModal(item)}
            />
          ))}

          {reservados.length === 0 && (
            <p style={{ textAlign: "center", width: "100%" }}>Nenhum item reservado.</p>
          )}
        </div>

        {modalAberto && itemSelecionado && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.fechar} onClick={fecharModal}>
                <svg fill="#0E6567" width="256px" height="256px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
                </svg>
              </div>

              <h1 className={styles.tituloSecao}>{itemSelecionado.obj_descricao}</h1>

              <Image
                src={itemSelecionado.obj_foto}
                alt={itemSelecionado.obj_descricao}
                width={250}
                height={250}
              />

              <p><strong>Encontrada dia:</strong> {itemSelecionado.obj_data_publicacao}</p>
              <p><strong>Local:</strong> {itemSelecionado.obj_local_encontrado}</p>
              <p><strong>Classificação:</strong> {itemSelecionado.obj_status}</p>

              {/* 🔥 EXCLUIR DEFINITIVO */}
              
              <button className={styles.excluirBtn} onClick={() => excluirItem(itemSelecionado.obj_id)}>
                Excluir Definitivamente
              </button>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}

