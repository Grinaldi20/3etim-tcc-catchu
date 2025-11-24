"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const validarEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errosTemp = {};

    if (!email.trim()) errosTemp.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email))
      errosTemp.email = "E-mail inválido. Ex: exemplo@gmail.com";

    if (!senha) errosTemp.senha = "A senha é obrigatória.";
    else if (senha.length < 6)
      errosTemp.senha = "A senha deve ter pelo menos 6 caracteres.";

    setErros(errosTemp);
    if (Object.keys(errosTemp).length > 0) return;

    try {
      const API = (
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333"
      ).replace(/\/$/, "");

      const url = `${API}/login?email=${encodeURIComponent(
        email
      )}&senha=${encodeURIComponent(senha)}`;

      const res = await fetch(url);
      const json = await res.json();

      if (!res.ok || json.sucesso === false) {
        setErros({ api: json.mensagem || "Erro ao fazer login" });
        return;
      }

      const usuario = Array.isArray(json.dados)
        ? json.dados[0]
        : json.dados ?? null;

      if (!usuario) {
        setErros({ api: "Erro inesperado: usuário não encontrado." });
        return;
      }

      // 🔥 SALVA TUDO NO LOCALSTORAGE (nome, email, tipo, id)
      try {
        localStorage.setItem("usuario", JSON.stringify(usuario));
      } catch (e) {
        console.warn("Erro ao salvar localStorage:", e);
      }

      const proximaTela = usuario.usu_tipo === 1 ? "/TelaAdmin" : "/TelaPrincipal";

      setMensagemSucesso("Login realizado com sucesso!");
      setTimeout(() => router.push(proximaTela), 600);

    } catch (err) {
      console.error(err);
      setErros({ api: "Erro de conexão com a API." });
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
          alt="Logo"
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>ACESSE SUA CONTA</h1>

        <div className={styles.formGroup}>
          <div className={styles.icon} />
          <input
            type="email"
            className={styles.linhaInput}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        <div className={styles.formGroup} style={{ position: "relative" }}>
          <div className={styles.icon} />
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
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
            }}
          >
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        <Link href="/">
          <span className={styles.span}>Não possui uma conta?</span>
        </Link>

        <button type="submit" className={styles.button}>
          Entrar
        </button>

        {erros.api && <p className={styles.erro}>{erros.api}</p>}
        {mensagemSucesso && (
          <p className={styles.sucesso}>{mensagemSucesso}</p>
        )}
      </form>
    </main>
  );
}
