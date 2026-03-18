document.getElementById('botaoFoto').addEventListener('click', () => {
    const imgElement = document.getElementById('foto');

    imgElement.src = 'http://localhost:25000/foto';
    imgElement.style.display = 'block';
});