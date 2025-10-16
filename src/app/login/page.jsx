"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  // Regex básica para validar email
  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) novosErros.email = "E-mail inválido. Ex: exemplo@gmail.com";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6) novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setMensagemSucesso("Login realizado com sucesso!");
      console.log({ nome, email, senha });

      // limpa campos
      setNome("");
      setEmail("");
      setSenha("");

      setTimeout(() => setMensagemSucesso(""), 3000);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.lado}>
        <Image
          className={styles.ImgMaior}
          src="/logo1.png"
          width={120}
          height={100}
          alt="Logo Maior"
          quality={100}
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>ACESSE SUA CONTA</h1>

        {/* Nome */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
          <input
            type="text"
            className={styles.linhaInput}
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        {erros.nome && <p className={styles.erro}>{erros.nome}</p>}

        {/* Email */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </div>
          <input
            type="email"
            className={styles.linhaInput}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        {/* Senha */}
        <div className={styles.formGroup} style={{ position: "relative" }}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
            </svg>
          </div>

          <input
            type={mostrarSenha ? "text" : "password"}
            className={styles.linhaInput}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className={styles.toggleSenha}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "#555",
            }}
          >
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        {/* Link e botão */}
        <Link href="/Cadastro">
          <span className={styles.span}>Não possui uma conta?</span>
        </Link>

        <button type="submit" className={styles.button}>
          Entrar
        </button>

        {mensagemSucesso && <p className={styles.sucesso}>{mensagemSucesso}</p>}
      </form>
    </main>
  );
}
