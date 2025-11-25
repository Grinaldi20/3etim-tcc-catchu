"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dados() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [excluindo, setExcluindo] = useState(false);
  const [mostrarConfirm, setMostrarConfirm] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function carregar() {
      try {
        const raw = localStorage.getItem("usuario");
        const usu_id_local = localStorage.getItem("usu_id");
        if (raw) {
          const u = JSON.parse(raw);
          // se tiver email, usamos direto
          if (u.usu_email) {
            setUsuario(u);
            setLoading(false);
            return;
          }
        }

        // fallback: buscar todos e filtrar pelo id (usa rota que você já tem)
        if (usu_id_local) {
          const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
          const resp = await fetch(`${API}/usuarios`);
          if (!resp.ok) throw new Error("Erro ao buscar usuários");
          const json = await resp.json();
          const lista = json?.dados || json?.data || [];
          const found = Array.isArray(lista) ? lista.find(x => String(x.usu_id) === String(usu_id_local)) : null;
          if (found) {
            // normalize para o formato que usamos (sem senha)
            const safe = {
              usu_id: found.usu_id,
              usu_nome: found.usu_nome,
              usu_email: found.usu_email,
              usu_tipo: found.usu_tipo,
              usu_senha: found.usu_senha
            };
            localStorage.setItem("usuario", JSON.stringify(safe)); // salva para próxima vez
            setUsuario(safe);
            setLoading(false);
            return;
          }
        }

        // se não achou nada
        setUsuario(null);
      } catch (err) {
        console.error("Erro ao carregar usuário:", err);
        setUsuario(null);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  function excluirConta() {
    // abre o modal centralizado de confirmação
    setMostrarConfirm(true);
  }

  async function confirmarExclusao() {
    const usu_id = (usuario && usuario.usu_id) || localStorage.getItem("usu_id");
    if (!usu_id) {
      setMensagemSucesso("ID do usuário não encontrado.");
      setMostrarConfirm(false);
      setTimeout(() => setMensagemSucesso(''), 2500);
      return;
    }

    try {
      setExcluindo(true);
      setMostrarConfirm(false);
      const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
      const resp = await fetch(`${API}/usuarios/${usu_id}`, { method: "DELETE" });
      const json = await resp.json().catch(() => null);

      if (resp.ok) {
        localStorage.removeItem("usuario");
        localStorage.removeItem("usu_id");
        setMensagemSucesso("Conta Excluida com Sucesso!");
        setTimeout(() => {
          setMensagemSucesso("");
          router.push("/login");
        }, 1400);
      } else {
        const msg = (json && json.mensagem) ? json.mensagem : `Erro ao excluir (status ${resp.status})`;
        setMensagemSucesso(String(msg));
        setTimeout(() => setMensagemSucesso(''), 3500);
      }
    } catch (err) {
      console.error("Erro ao excluir conta:", err);
      setMensagemSucesso("Erro ao excluir conta. Veja console.");
      setTimeout(() => setMensagemSucesso(''), 3500);
    } finally {
      setExcluindo(false);
    }
  }

  if (loading) {
    return (
      <main className={styles.main}>
        <h2 style={{ color: "white" }}>Carregando dados...</h2>
      </main>
    );
  }

  if (!usuario) {
    return (
      <main className={styles.main}>
        <h2 style={{ color: "white" }}>Usuário não encontrado. Faça login novamente.</h2>
        <Link href="/login"><button className={styles.button}>Ir para Login</button></Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <a href="/Configuracao">
          <div className={styles.backArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
          </div>
        </a>

        <div className={styles.verde}>
          <Image className={styles.ImgMaior} src="/logo1.png" alt="Logo" width={60} height={60} />
        </div>

        <div className={styles.formGroup}>
          <h1 className={styles.h2}>{usuario.usu_nome}</h1>
        </div>

        <div className={styles.formGroup}>
          <h1 className={styles.h2}>{usuario.usu_email || "—"}</h1>
        </div>


        <div className={styles.formGroup}>
          <h1 className={styles.h2}>{usuario.usu_tipo === 1 ? "Administrador" : "Usuário"}</h1>
        </div>

        <div className={styles.junto}>
          <Link href="/AlterarSenha">
            <button type="button" className={styles.button}>Alterar Senha</button>
          </Link>
          <button type="button" onClick={excluirConta} className={styles.button} disabled={excluindo}>
            {excluindo ? "Excluindo..." : "Excluir Conta"}
          </button>
        </div>
      </form>

      {mostrarConfirm && (
        <div className={styles.modalOverlayCentered}>
          <div className={styles.confirmBox} role="dialog" aria-modal="true">
            <p style={{ marginBottom: 18, fontWeight: 600 }}>Tem certeza que deseja excluir sua conta?</p>
            <div className={styles.confirmButtons}>
              <button className={styles.cancelBtn} onClick={() => setMostrarConfirm(false)} disabled={excluindo}>Cancelar</button>
              <button className={styles.confirmBtn} onClick={confirmarExclusao} disabled={excluindo}>{excluindo ? 'Excluindo...' : 'Excluir'}</button>
            </div>
          </div>
        </div>
      )}

      {mensagemSucesso && (
        <div className={styles.modalOverlayCentered}>
          <div className={styles.successBox}>
            <p style={{ margin: 0, fontWeight: 700 }}>{mensagemSucesso}</p>
          </div>
        </div>
      )}
    </main>
  );
}
