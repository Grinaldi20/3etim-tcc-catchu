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
  const [carregando, setCarregando] = useState(false);

  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) novosErros.email = "E-mail inválido.";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6) novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";

    setErros(novosErros);
    if (Object.keys(novosErros).length !== 0) return;

    setCarregando(true);
    try {
      const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
      const url = `${API}/login?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`;

      const res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" }, mode: "cors" });

      const json = await res.json();

      if (!res.ok || !json.sucesso) {
        setErros({ api: json.mensagem || "Credenciais inválidas." });
        setMensagemSucesso("");
        return;
      }

      // json.dados pode ser objeto (conforme controller corrigido)
      const usuario = json.dados;

      if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        setMensagemSucesso("Login realizado com sucesso!");
        setEmail("");
        setSenha("");
        setErros({});
        setTimeout(() => router.push("/dashboard"), 1200);
      }
    } catch (error) {
      console.error("Erro ao chamar API de login:", error);
      setErros({ api: "Erro de conexão. Verifique backend/CORS." });
      setMensagemSucesso("");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.lado}>
        <Image className={styles.ImgMaior} src="/logo1.png" width={120} height={100} alt="Logo Maior" quality={100} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>ACESSE SUA CONTA</h1>

        <div className={styles.formGroup}>
          <div className={styles.icon}>{/* ícone */}</div>
          <input type="email" className={styles.linhaInput} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        <div className={styles.formGroup} style={{ position: "relative" }}>
          <div className={styles.icon}>{/* ícone */}</div>
          <input type={mostrarSenha ? "text" : "password"} className={styles.linhaInput} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} className={styles.toggleSenha} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#555" }}>
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        <Link href="/Cadastro"><span className={styles.span}>Não possui uma conta?</span></Link>

        <button type="submit" className={styles.button} disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        {erros.api && <p className={styles.erro}>{erros.api}</p>}
        {mensagemSucesso && <p className={styles.sucesso}>{mensagemSucesso}</p>}
      </form>
    </main>
  );
}