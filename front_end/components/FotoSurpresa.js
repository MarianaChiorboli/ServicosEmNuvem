'use client';

import { useState } from 'react';
import styles from './FotoSurpresa.module.css';

export default function FotoSurpresa() {
  const [imagem, setImagem] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const handleClick = async () => {
    setCarregando(true);
    setErro(null);
    setImagem(null);

    try {
      // ✅ CORRETO: chama o proxy do Next
      const response = await fetch('/api/foto');

      if (!response.ok) {
        throw new Error('Erro ao buscar foto');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      setTimeout(() => {
        setImagem(imageUrl);
        setCarregando(false);
      }, 300);

    } catch (err) {
      setErro('Erro ao carregar a foto. Tente novamente.');
      setCarregando(false);
      console.error(err);
    }
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

      {erro && <p className={styles.erro}>{erro}</p>}

      <div className={styles.fotoArea}>
        {imagem && (
          <img
            src={imagem}
            alt="Foto surpresa"
            className={styles.foto}
          />
        )}
      </div>
    </div>
  );
}