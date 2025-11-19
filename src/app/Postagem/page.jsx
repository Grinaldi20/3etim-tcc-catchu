"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Postagem() {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const abrirSelecaoArquivos = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <div className={styles.lado}>
            
            {/* Mostra a imagem escolhida ou a câmera */}
            {preview ? (
              <Image
                className={styles.ImgMaior}
                src={preview}
                width={600}
                height={600}
                alt="Preview"
              />
            ) : (
              <Image
                className={styles.ImgMaior}
                src="/camera.png"
                width={600}
                height={600}
                alt="Logo Maior"
                quality={100}
              />
            )}

            {/* Botão que abre o seletor */}
            <button className={styles.button2} onClick={abrirSelecaoArquivos}>
              Adicionar Imagem
            </button>

            {/* Input de arquivo oculto */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <form className={styles.form}>
            <select placeholder="Classificação" className={styles.select}>
              <option className={styles.option2} value="">
                Classificação
              </option>
              <option className={styles.option} value="Roupas">
                Roupas
              </option>
              <option className={styles.option} value="Calçados">
                Calçados
              </option>
              <option className={styles.option} value="Material Escolar">
                Material Escolar
              </option>
              <option className={styles.option} value="Resgatados">
                Resgatados
              </option>
            </select>

            <textarea
              name="Descrição"
              id="Descrição"
              placeholder="Descrição"
              className={styles.texto}
            />

            <div className={styles.formGroup}>
              <input type="text" placeholder="Lugar Encontrado" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <input type="text" placeholder="Data" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <input type="text" placeholder="Retirado Por" className={styles.input} />
            </div>
          </form>
        </div>

        <button className={styles.button}>Publicar</button>
      </div>
    </main>
  );
}
