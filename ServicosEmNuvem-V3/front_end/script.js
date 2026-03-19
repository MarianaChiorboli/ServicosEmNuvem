document.getElementById('botaoFoto').addEventListener('click', () => {
    const imgElement = document.getElementById('foto');

    imgElement.src = 'http://172.31.30.31:25000/foto';
    imgElement.style.display = 'block';
});