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

  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!email.trim()) novosErros.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) novosErros.email = "E-mail inválido. Ex: exemplo@gmail.com";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    else if (senha.length < 6) novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";

    setErros(novosErros);
    if (Object.keys(novosErros).length !== 0) return;

    try {
      const API = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333").replace(/\/$/, "");
      const url = `${API}/login?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`;

      console.log("🔁 Enviando requisição de login (GET) para:", url);
      const res = await fetch(url);

      let json = null;
      let text = null;
      try {
        json = await res.json();
      } catch (err) {
        try { text = await res.text(); } catch (e) { text = null; }
      }

      console.log("Resposta login -> status:", res.status, "ok:", res.ok, "json:", json, "text:", text);

      if (!res.ok || (json && json.sucesso === false)) {
        const msg = (json && json.mensagem) ? json.mensagem : (text || `Erro ao logar (status ${res.status})`);
        setErros({ api: String(msg) });
        return;
      }

      const usuario = Array.isArray(json?.dados) ? json.dados[0] : json?.dados ?? null;
      
      // --- Lógica de redirecionamento modificada aqui ---
      let proximaTela = "/TelaPrincipal"; // Padrão
      
      if (usuario) {
        // Assume-se que 'usu_tipo' contém o tipo de usuário, e '1' é o admin
        const tipoUsuario = usuario.usu_tipo; 
        const { usu_senha: _unused, ...safeUsuario } = usuario;
        
        try { localStorage.setItem("usuario", JSON.stringify(safeUsuario)); } catch (e) { console.warn(e); }

        // Se o tipo de usuário for 1 (Admin), redireciona para o dashboard de admin
        if (tipoUsuario === 1) {
            proximaTela = "/TelaAdmin"; // Mude para o caminho real da sua tela de admin
            console.log("Usuário Admin detectado. Redirecionando para:", proximaTela);
        } else {
            console.log("Usuário Comum detectado. Redirecionando para:", proximaTela);
        }
      }

      setMensagemSucesso("Login realizado com sucesso!");
      setEmail(""); setSenha("");
      setTimeout(() => {
        router.push(proximaTela); // Usa a tela definida (Admin ou Principal)
      }, 600);
      // ----------------------------------------------------

    } catch (error) {
      console.error("Erro ao chamar API de login:", error);
      setErros({ api: "Erro de conexão. Verifique backend/CORS e console." });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.lado}>
        <Image className={styles.ImgMaior} src="/logo1.png" width={120} height={100} alt="Logo" />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>ACESSE SUA CONTA</h1>

        <div className={styles.formGroup}>
          <div className={styles.icon} />
          <input type="email" className={styles.linhaInput} placeholder="Email" value={email ?? ""} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {erros.email && <p className={styles.erro}>{erros.email}</p>}

        <div className={styles.formGroup} style={{ position: "relative" }}>
          <div className={styles.icon} />
          <input type={mostrarSenha ? "text" : "password"} className={styles.linhaInput} placeholder="Senha" value={senha ?? ""} onChange={(e) => setSenha(e.target.value)} />
          <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} className={styles.toggleSenha} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none" }}>
            {mostrarSenha ? "🙈" : "👁️"}
          </button>
        </div>
        {erros.senha && <p className={styles.erro}>{erros.senha}</p>}

        <Link href="/"><span className={styles.span}>Não possui uma conta?</span></Link>

        <button type="submit" className={styles.button}>Entrar</button>

        {erros.api && <p className={styles.erro}>{erros.api}</p>}
        {mensagemSucesso && <p className={styles.sucesso}>{mensagemSucesso}</p>}
      </form>
    </main>
  );
}