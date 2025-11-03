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
    const regex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email))
      novosErros.email = "E-mail inválido. Ex: exemplo@gmail.com";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6)
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    if (confirmarSenha !== senha)
      novosErros.confirmarSenha = "As senhas não coincidem.";

    setErros(novosErros);
    if (Object.keys(novosErros).length !== 0) return;

    setCarregando(true);
    setMensagemSucesso("");

    try {
      const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
      const url = `${API}/Cadastro?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}&nome=${encodeURIComponent(nome)}`;

      console.log('🔁 Enviando requisição de cadastro para:', url);
      const res = await fetch(url, { method: 'GET', mode: 'cors' });

      // ler body como texto e tentar parsear JSON
      const bodyText = await res.text();
      let json = null;
      try {
        json = bodyText ? JSON.parse(bodyText) : null;
      } catch (parseErr) {
        console.warn('Resposta do cadastro não é JSON:', parseErr, 'raw:', bodyText);
      }

      console.log('Cadastro - status:', res.status, res.statusText, 'body:', bodyText);

      if (!res.ok || !json?.sucesso) {
        // montar mensagem amigável
        let msg = json?.mensagem || bodyText || `Erro ao cadastrar (status ${res.status})`;
        if (typeof msg === 'string') {
          const t = msg.trim();
          if (t === '' || t === '{}') msg = 'Erro ao cadastrar. Verifique os dados.';
        } else if (typeof msg === 'object') {
          msg = msg.mensagem || 'Erro ao cadastrar.';
        }

        setErros({ api: String(msg) });
        setMensagemSucesso("");
        setCarregando(false);
        return;
      }

      // extrai usuário do retorno
      const usuario = Array.isArray(json.dados) ? json.dados[0] : json.dados;
      if (usuario) {
        try {
          localStorage.setItem('usuario', JSON.stringify(usuario));
        } catch (storageErr) {
          console.warn('Não foi possível salvar usuario no localStorage:', storageErr);
        }
      }

      setMensagemSucesso(json.mensagem || 'Cadastro realizado com sucesso! Redirecionando...');
      setErros({});
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      setTimeout(() => {
        setMensagemSucesso("");
        router.push('/login');
      }, 1500);
    } catch (error) {
      console.error('Erro ao chamar API de cadastro:', error);
      setErros({ api: 'Erro de conexão. Verifique backend/CORS.' });
      setMensagemSucesso("");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.lado}>
        <Image
          className={styles.ImgMaior}
          src="/logo1.png"
          width={150}
          height={150}
          alt="Logo Maior"
          quality={100}
        />

        <h2 className={styles.subtitulo}>Bem-vindo de volta</h2>
        <h3 className={styles.texto}>Acesse sua conta agora</h3>
        <Link href="/login">
          <button className={styles.button2}>Entrar</button>
        </Link>

        <Image
          className={styles.ImgMenor}
          src="/logo2.png"
          width={400}
          height={400}
          alt="Logo Menor"
          quality={100}
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>CRIAR SUA CONTA</h1>

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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        {/* Senha */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
            </svg>
          </div>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className={styles.toggleSenha}
          >
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        {/* Confirmar Senha */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
            </svg>
          </div>
          <input
            type={mostrarConfirmar ? "text" : "password"}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
            className={styles.toggleSenha}
          >
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