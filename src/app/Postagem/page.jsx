"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Postagem() {
  const router = useRouter();
  const fecharModal = () => {
    router.push("/TelaAdmin");
  };
  const fileInputRef = useRef(null);

  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  const [classificacao, setClassificacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");

  const abrirSelecaoArquivos = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImagem(file);
    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  const handlePublicar = async () => {
    if (!imagem) return alert("Selecione uma imagem!");
    if (!classificacao) return alert("Selecione a classificação!");

    try {
      const formData = new FormData();

      // ✅ nome deve bater com multer .single('img')
      formData.append("img", imagem);

      // ✅ campos que sua API espera
      formData.append("categ_id", classificacao);
      formData.append("usu_id", "1"); 
      formData.append("obj_descricao", descricao);
      formData.append("obj_local_encontrado", local);
      formData.append("obj_data_publicacao", data || new Date().toISOString().split("T")[0]);
      formData.append("obj_status", "perdido");

      const res = await fetch("http://localhost:3333/objetos", {
        method: "POST",
        body: formData
      });

      const json = await res.json();

      if (json.sucesso) {
        alert("✅ Publicado com sucesso!");
        setImagem(null);
        setPreview(null);
        setClassificacao("");
        setDescricao("");
        setLocal("");
        setData("");
      } else {
        alert("❌ Erro: " + json.mensagem);
      }

    } catch (error) {
      console.error(error);
      alert("Erro na conexão com a API");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <div className={styles.lado} style={{ position: "relative" }}>
            <div
              onClick={fecharModal}
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                zIndex: 20,
                cursor: "pointer",
                background: "transparent",
                borderRadius: 4,
                padding: 4,
              }}
            >
              <svg
                fill="#0E6567"
                width="50"
                height="50"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0E6567"
                strokeWidth="0.01024"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"></path>
              </svg>
            </div>
            {preview ? (
              <Image
                className={styles.ImgMaior}
                src={preview}
                width={600}
                height={600}
                style={{ marginTop: 48 }}
                alt="Preview"
              />
            ) : (
              <Image
                className={styles.ImgMaior}
                src="/camera.png"
                width={400}
                height={400}
                style={{ marginTop: 48 }}
                alt="Câmera"
              />
            )}

            <button
              type="button"
              className={styles.button2}
              onClick={abrirSelecaoArquivos}
            >
              Adicionar Imagem
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

            <select
              className={styles.select}
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
            >
              <option value="">Classificação</option>
              <option value="2">Roupas</option>
              <option value="5">Calçados</option>
              <option value="4">Material Escolar</option>
              <option value="1">Resgatados</option>
              <option value="3">Objetos Gerais</option>
            </select>

            <textarea
              placeholder="Descrição"
              className={styles.texto}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <input
              type="text"
              placeholder="Lugar Encontrado"
              className={styles.input}
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />

            <input
              type="date"
              className={styles.input}
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={styles.button}
                onClick={handlePublicar}
              >
                Publicar
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
