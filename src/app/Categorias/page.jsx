"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Categorias() {
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  return (
    <main className={styles.main}>
      <div className={styles.Gradiente}>
        <header className={styles.header}>
                    
       <Link href="http://localhost:3000">      
          <Image
            className={styles.img}
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={100}

          />
           
          </Link>
          

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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
           </a> 
          </div>
        </header>

        <h1 className={styles.titulo}>Categorias</h1>
             
     

       <div className={styles.CardsCarrocel}>

          <a href="/MaterialEscolar">    
           
                <div className={styles.MaterialEscolar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backpack-fill" viewBox="0 0 16 16">
                        <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                        <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    <h2 className={styles.h2}>Material Escolar</h2>
                </div>
                </a>
           
           
          <a href="/Roupas">    
           
            

         
                <div className={styles.Roupas}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Z"/></svg>
                    <h2 className={styles.h2}>Roupas</h2>
                </div>
         </a>

         
          <a href="/Calcados">    
           
            
                <div className={styles.Sapatos}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M216-580H88q4-14 10.5-26.5T114-631l154-206q17-23 45.5-30.5T368-861l28 14q21 11 32.5 30t11.5 42v84l74-19q30-8 58 7.5t38 44.5l65 196 170 170q20 20 27.5 43t7.5 49q0 37-20 66t-52 43L354-525q-29-27-64-41t-74-14ZM566-80q-30 0-57-11t-50-31L134-417q-19-17-31-38.5T86-500h130q23 0 44.5 8t38.5 25L703-80H566Z"/></svg>
                     <h2 className={styles.h2}>Calçados</h2>
                </div>
          </a>

          
        <a href="/ObjetosGerais">    
           
       
                <div className={styles.ObjetosGerais}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                    </svg>
                    <h2 className={styles.h2}>Objetos Gerais</h2>
                </div>
         </a>

           
          <a href="/Resgatados">    
           
   
                <div className={styles.Resgatados}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <h2 className={styles.h2}>Resgatados</h2>
                </div>
           </a>
</div>
</div>
        <div className={styles.CardsItens}>
          <div className={styles.Cards}>
            <Image src="/bolsa.png" alt="Blusa Azul" width={170} height={165} />
             <div className={styles.linha}></div>
            <h3 className={styles.h3}>Bolsa Vermelha</h3>
            <button className={styles.button} onClick={abrirModal}>Saber Mais</button>
          </div>

          <div className={styles.Cards}>
            <Image src="/Camisa.png" alt="Camisa" width={170} height={165} />
             <div className={styles.linha}></div>
            <h3 className={styles.h3}>Camisa</h3>
            <button className={styles.button} onClick={abrirModal}>Saber Mais</button>
          </div>

          <div className={styles.Cards}>
            <Image src="/chinelo.png" alt="Chinelo" width={170} height={165} />
             <div className={styles.linha}></div>
            <h3 className={styles.h3}>Chinelo</h3>
            <button className={styles.button} onClick={abrirModal}>Saber Mais</button>
          </div>

          <div className={styles.Cards}>
            <Image src="/estojo.png" alt="Estojo" width={170} height={165} />
             <div className={styles.linha}></div>
            <h3 className={styles.h3}>Estojo</h3>
            <button className={styles.button} onClick={abrirModal}>Saber Mais</button>
          </div>
        </div>

      

        {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Bolsa Vermelha</p>
              <Image src="/bolsa.png" alt="Bolsa Vermelha" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 09/08/2024</p>
              <p><strong>Local:</strong> Refeitório</p>
              <p><strong>Classificação:</strong> Objetos gerais</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Blusa Roxa</p>
              <Image src="/Camisa.png" alt="Camisa" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 01/07/2025</p>
              <p><strong>Local:</strong> Quadra</p>
              <p><strong>Classificação:</strong>Roupas</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Blusa Azul</p>
              <Image src="/chinelo.png" alt="Chinelo Azul" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 04/04/2024</p>
              <p><strong>Local:</strong> Patio</p>
              <p><strong>Classificação:</strong>Calçados</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Estojo Azul</p>
              <Image src="/estojo.png" alt="Estojo Azul" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 20/10/2023</p>
              <p><strong>Local:</strong>Sala 03</p>
              <p><strong>Classificação:</strong>Material Escolar</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Blusa Azul</p>
              <Image src="/bolsa.png" alt="Bolsa preta" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 09/08/2024</p>
              <p><strong>Local:</strong> Refeitório</p>
              <p><strong>Classificação:</strong> Objetos gerais</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Blusa Azul</p>
              <Image src="/bolsa.png" alt="Bolsa preta" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 09/08/2024</p>
              <p><strong>Local:</strong> Refeitório</p>
              <p><strong>Classificação:</strong> Objetos gerais</p>
              <button>Reservar</button>
            </div>
          </div>
        )}

         {modalAberto && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.fechar} onClick={fecharModal}>×</span>
              <p className={styles.tituloSecao}>Blusa Azul</p>
              <Image src="/bolsa.png" alt="Bolsa preta" width={250} height={250} />
              <p><strong>Encontrada dia:</strong> 09/08/2024</p>
              <p><strong>Local:</strong> Refeitório</p>
              <p><strong>Classificação:</strong> Objetos gerais</p>
              <button>Reservar</button>
            </div>
          </div>
        )}
     
    </main>
  );
}
