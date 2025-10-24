"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Dados() {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrar, setMostrar] = useState({
    antiga: false,
    nova: false,
    confirmar: false,
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const validar = (e) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!senhaAntiga || !novaSenha || !confirmarSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (novaSenha.length < 6) {
      setErro("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senhaAntiga === novaSenha){
      setErro("A nova senha não pode ser igual a antiga")
      return;
    }

    setSucesso("Senha alterada com sucesso!");
    setSenhaAntiga("");
    setNovaSenha("");
    setConfirmarSenha("");
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={validar}>
        <a href="/Dados">
          <div className={styles.backArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
          </div>
        </a>

        <div className={styles.verde}>
          <Image
            className={styles.ImgMaior}
            src="/logo1.png"
            width={60}
            height={60}
            alt="Logo Maior"
            quality={100}
          />
        </div>

        {/* Senha antiga */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>
          </div>
          <input
            type={mostrar.antiga ? "text" : "password"}
            className={styles.Input}
            placeholder="Senha Antiga"
            value={senhaAntiga}
            onChange={(e) => setSenhaAntiga(e.target.value)}
          />
          <button
            type="button"
            className={styles.toggleSenha}
            onClick={() => setMostrar({ ...mostrar, antiga: !mostrar.antiga })}
          >
            {mostrar.antiga ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Nova senha */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>
          </div>
          <input
            type={mostrar.nova ? "text" : "password"}
            className={styles.Input}
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button
            type="button"
            className={styles.toggleSenha}
            onClick={() => setMostrar({ ...mostrar, nova: !mostrar.nova })}
          >
            {mostrar.nova ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Confirmar senha */}
        <div className={styles.formGroup2}>
          <div className={styles.icon}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
            </svg>
          </div>
          <input
            type={mostrar.confirmar ? "text" : "password"}
            className={styles.Input}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button
            type="button"
            className={styles.toggleSenha}
            onClick={() => setMostrar({ ...mostrar, confirmar: !mostrar.confirmar })}
          >
            {mostrar.confirmar ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Mensagens */}
        {erro && <p className={styles.erro}>{erro}</p>}
        {sucesso && <p className={styles.sucesso}>{sucesso}</p>}

        <div className={styles.junto}>
          <button type="submit" className={styles.button}>
            CONFIRMAR
          </button>
        </div>
      </form>
    </main>
  );
}
