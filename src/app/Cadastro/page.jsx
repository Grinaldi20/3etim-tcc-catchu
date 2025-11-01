"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [erros, setErros] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Função para validar email usando regex
  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Função para validar o formulário
  const validarFormulario = () => {
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) novosErros.email = "E-mail inválido. Ex: exemplo@gmail.com";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6) novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    if (confirmarSenha !== senha) novosErros.confirmarSenha = "As senhas não coincidem.";

    return novosErros;
  };

  // Função principal de submissão
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valida formulário
    const novosErros = validarFormulario();
    setErros(novosErros);
    if (Object.keys(novosErros).length !== 0) return;

    setCarregando(true);
    setMensagemSucesso("");

    try {
      // Verifica configuração da API
      if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
        throw new Error('URL da API não configurada no arquivo .env.local');
      }

      const API = process.env.NEXT_PUBLIC_API_BASE_URL.replace(/\/$/, "");
      const url = `${API}/usuarios`;

      console.log('🔄 Iniciando cadastro:', { url });

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          usu_nome: nome,
          usu_email: email,
          usu_senha: senha,
          usu_data_cadastro: new Date().toISOString()
        })
      });

      // Tenta ler a resposta como JSON
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error('❌ Erro ao ler resposta:', parseError);
        throw new Error('Resposta inválida do servidor');
      }

      // Verifica sucesso da operação
      if (!res.ok || !data.sucesso) {
        throw new Error(data.mensagem || `Erro ao cadastrar (${res.status})`);
      }

      console.log('✅ Cadastro realizado:', data);
      
      // Limpa formulário e mostra sucesso
      setMensagemSucesso("Cadastro realizado com sucesso! Redirecionando...");
      setErros({});
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      // Redireciona após 2 segundos
      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (error) {
      console.error('❌ Erro:', {
        mensagem: error.message,
        url: process.env.NEXT_PUBLIC_API_BASE_URL
      });

      setErros({
        api: `Erro: ${error.message}. Verifique sua conexão e tente novamente.`
      });
      
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
          priority 
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

        {/* Campo Nome */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={carregando}
          />
        </div>
        {erros.nome && <p className={styles.erro}>{erros.nome}</p>}

        {/* Campo Email */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </div>
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={carregando}
          />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        {/* Campo Senha */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
          </div>
          <input 
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={carregando}
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

        {/* Campo Confirmar Senha */}
        <div className={styles.formGroup}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
          </div>
          <input 
            type={mostrarConfirmar ? "text" : "password"}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            disabled={carregando}
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

        {/* Botão Submit */}
        <button 
          type="submit" 
          className={styles.button} 
          disabled={carregando}
        >
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>

        {/* Mensagens de Erro/Sucesso */}
        {erros.api && <p className={styles.erro}>{erros.api}</p>}
        {mensagemSucesso && <p className={styles.sucesso}>{mensagemSucesso}</p>}
      </form>
    </main>
  );
}