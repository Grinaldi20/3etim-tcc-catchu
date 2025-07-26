import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Postagem() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <div className={styles.lado}>
            <Image
              className={styles.ImgMaior}
              src="/camera.png"
              width={200}
              height={150}
              alt="Logo Maior"
              quality={100}
            />
            <button className={styles.button2}>Adicionar Imagem</button>
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
              <input type="text" placeholder="Lugar Encontrado" />
            </div>

            <div className={styles.formGroup}>
              <input type="text" placeholder="Data " />
            </div>

            <div className={styles.formGroup}>
              <input type="text" placeholder="Retirado Por" />
            </div>
          </form>
        </div>

        <button className={styles.button}>Publicar</button>
      </div>
    </main>
  );
}
