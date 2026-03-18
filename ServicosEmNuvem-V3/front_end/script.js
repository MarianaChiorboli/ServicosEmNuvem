document.getElementById('botaoFoto').addEventListener('click', () => {
    const imgElement = document.getElementById('foto');

    imgElement.src = 'http://54.80.144.100:8080/foto';
    imgElement.style.display = 'block';
});