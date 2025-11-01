"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [erros, setErros] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) novosErros.email = "E-mail inválido. Ex: exemplo@gmail.com";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6) novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    if (confirmarSenha !== senha) novosErros.confirmarSenha = "As senhas não coincidem.";

    setErros(novosErros);
    if (Object.keys(novosErros).length !== 0) return;

    setCarregando(true);
    try {
      const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
      const url = `${API}/usuarios`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        mode: "cors",
        body: JSON.stringify({
          usu_nome: nome,
          usu_email: email,
          usu_senha: senha,
          usu_data_cadastro: new Date().toISOString()
        }),
      });

      let json;
      try {
        json = await res.json();
      } catch {
        throw new Error(`Resposta inválida do servidor (status ${res.status})`);
      }

      if (!res.ok || !json.sucesso) {
        const msg = json?.mensagem || `Erro ao cadastrar (status ${res.status}).`;
        setErros({ api: msg });
        setMensagemSucesso("");
        setCarregando(false);
        return;
      }

      setMensagemSucesso(json.mensagem || "Cadastro realizado com sucesso!");
      setErros({});
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      setTimeout(() => {
        setMensagemSucesso("");
        router.push("/login");
      }, 1500);
    } catch (error) {
      console.error("Erro ao chamar API de cadastro:", error);
      setErros({ api: "Erro de conexão. Verifique backend/CORS." });
      setMensagemSucesso("");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.lado}>
        <Image className={styles.ImgMaior} src="/logo1.png" width={150} height={150} alt="Logo Maior" quality={100} />

        <h2 className={styles.subtitulo}>Bem-vindo de volta</h2>
        <h3 className={styles.texto}>Acesse sua conta agora</h3>
        <Link href="/login">
          <button className={styles.button2}>Entrar</button>
        </Link>

        <Image className={styles.ImgMenor} src="/logo2.png" width={400} height={400} alt="Logo Menor" quality={100} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>CRIAR SUA CONTA</h1>

        <div className={styles.formGroup}>
          <div className={styles.icon}>
            {/* ícone */}
          </div>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        {erros.nome && <p className={styles.erro}>{erros.nome}</p>}

        <div className={styles.formGroup}>
          <div className={styles.icon}>{/* ícone */}</div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        <div className={styles.formGroup}>
          <div className={styles.icon}>{/* ícone */}</div>
          <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} className={styles.toggleSenha}>
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        <div className={styles.formGroup}>
          <div className={styles.icon}>{/* ícone */}</div>
          <input type={mostrarConfirmar ? "text" : "password"} placeholder="Confirmar Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          <button type="button" onClick={() => setMostrarConfirmar(!mostrarConfirmar)} className={styles.toggleSenha}>
            {mostrarConfirmar ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.confirmarSenha && <p className={styles.erro}>{erros.confirmarSenha}</p>}

        <button type="submit" className={styles.button} disabled={carregando}>
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>

        {erros.api && <p className={styles.erro}>{erros.api}</p>}
        {mensagemSucesso && <p className={styles.sucesso}>{mensagemSucesso}</p>}
      </form>
    </main>
  );
}