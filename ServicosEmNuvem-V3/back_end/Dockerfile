# Define a imagem base - usa Python 3.9 slim (versão reduzida)
FROM python:3.9-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo app.py do diretório local para o container
COPY app.py .

# Copia a pasta front_end (necessária para servir os arquivos estáticos)
COPY ../front_end ./front_end

# Instala as dependências Python necessárias
RUN pip install --no-cache-dir flask

# Expõe a porta 25000 para acesso externo
EXPOSE 25000

# Define o comando padrão para iniciar a aplicação Flask
CMD ["python", "app.py"]
