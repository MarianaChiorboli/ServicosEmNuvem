'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './FotoSurpresa.module.css';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://172.31.30.31:25000';

export default function FotoSurpresa() {
  const [mostrarFoto, setMostrarFoto] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleClick = () => {
    setCarregando(true);
    setMostrarFoto(false);
    // Pequeno delay para dar feedback visual
    setTimeout(() => {
      setMostrarFoto(true);
      setCarregando(false);
    }, 300);
  };

  return (
    <div className={styles.container}>
      <h1>✨ Foto Surpresa ✨</h1>
      <p>Clique no botão para receber uma foto!</p>

      <button
        className={styles.button}
        onClick={handleClick}
        disabled={carregando}
      >
        {carregando ? 'Carregando...' : 'Mostrar foto'}
      </button>

      <div className={styles.fotoArea}>
        {mostrarFoto && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BACKEND_URL}/foto`}
            alt="Foto surpresa"
            className={styles.foto}
          />
        )}
      </div>
    </div>
  );
}