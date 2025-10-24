"use client";

import { useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import Link from "next/link";

export default function TelaPrincipal() {
  // ✅ Corrigido: importa o JS do Bootstrap apenas no lado do cliente
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <Image className={styles.img} src="/logo1.png" alt="Logo" width={100} height={100} />

        <div className={styles.Pesquisa}>
          <input type="text" placeholder="Pesquisa" />
        </div>

        <div className={styles.Icons}>
          <a href="/Carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16">
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
            </svg>
          </a>

          <a href="/Configuracao">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner" style={{ height: "auto", maxHeight: "40vh" }}>
            <div className="carousel-item active">
              <Image className={`d-block w-100 ${styles.imagem}`} src="/carrosel.png" alt="Slide 1" width={1200} height={400} quality={100} />
            </div>
            <div className="carousel-item">
              <Image className={`d-block w-100 ${styles.imagem}`} src="/carrosel6.png" alt="Slide 2" width={1200} height={400} quality={100} />
            </div>
            <div className="carousel-item">
              <Image className={`d-block w-100 ${styles.imagem}`} src="/carrosel2.png" alt="Slide 3" width={1200} height={400} quality={100} />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className={`carousel-control-prev-icon ${styles.carroselControlPrevIcon}`} aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className={`carousel-control-next-icon ${styles.carroselControlNextIcon}`} aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>

        <div className={styles.Cards}>
          <a href="/PoliticaRetirada">
            <div className={styles.PoliticaRetirada}>
              <p>Política de Retirada</p>
              <Image className={styles.imagem} src="/retirada.png" alt="Pertences" width={200} height={150} quality={100} />
            </div>
          </a>

          <a href="/Categorias">
            <div className={styles.Pertences}>
              <p>Categorias</p>
              <Image className={styles.imagem} src="/pertences.png" alt="Pertences" width={200} height={150} quality={100} />
            </div>
          </a>

          <a href="/AchouAlgo">
            <div className={styles.AchouAlgo}>
              <p>Achou Algo?</p>
              <Image className={styles.imagem} src="/algo.png" alt="Achou algo" width={200} height={150} quality={100} />
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
