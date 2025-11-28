"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Carrinho() {
  const router = useRouter();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("carrinho");
      const parsed = raw ? JSON.parse(raw) : [];
      setItens(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error("Erro ao ler carrinho do localStorage:", err);
      setItens([]);
    }
  }, []);

  async function excluirItem(objId) {
    try {
      // 1. Achar a reserva correspondente no carrinho local
      const reserva = itens.find((it) => it.obj_id === objId);

      // 2. Se tiver res_id, tentar apagar no backend (fallback se falhar)
      if (reserva && reserva.res_id) {
        try {
          const resp = await fetch(`http://localhost:3000/reservas/${reserva.res_id}`, {
            method: "DELETE"
          });
          if (!resp.ok) {
            console.warn("Falha ao deletar reserva no backend:", resp.status);
          }
        } catch (errApi) {
          console.warn("Erro ao chamar API para deletar reserva:", errApi);
        }
      } else {
        console.warn("Reserva não encontrada no item ou sem res_id. Vai remover localmente.");
      }

      // 3. Remover do localStorage e atualizar estado
      const novo = itens.filter((it) => it.obj_id !== objId);
      localStorage.setItem("carrinho", JSON.stringify(novo));
      setItens(novo);

      if (novo.length === 0) {
        router.push("/Categorias");
      }
    } catch (err) {
      console.error("Erro ao excluir item do carrinho:", err);
    }
  }

  if (!itens || itens.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link href="/Categorias">
              <div className={styles.backArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </div>
            </Link>

            <h1 className={styles.h1c}>Reservados</h1>
          </div>

          <p style={{ padding: 20 }}>Nenhum item reservado.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/Categorias">
            <div className={styles.backArrow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </div>
          </Link>

          <h1 className={styles.h1c}>Reservados</h1>
        </div>

        {itens.map((item) => (
          <div className={styles.item} key={item.obj_id}>
            <Image
              src={item.obj_foto || '/logo1.png'}
              width={100}
              height={100}
              alt={item.obj_descricao || 'Item reservado'}
              quality={100}
            />

            <div className={styles.itemInfo}>
              <div className={styles.itemTitle}>{item.obj_descricao}</div>
              <div className={styles.itemText}>Encontrada dia: {item.obj_data_publicacao}</div>
              <div className={styles.itemText}>Local: {item.obj_local_encontrado}</div>
              <div className={styles.itemText}>Classificação: {item.obj_status}</div>
              <button className={styles.button} onClick={() => excluirItem(item.obj_id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}