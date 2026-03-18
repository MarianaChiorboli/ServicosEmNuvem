document.getElementById('botaoFoto').addEventListener('click', () => {
    const imgElement = document.getElementById('foto');
    
    // Simplesmente carrega a imagem local sem fazer chamadas de API
    imgElement.src = 'image.jpeg';
    imgElement.style.display = 'block';
});