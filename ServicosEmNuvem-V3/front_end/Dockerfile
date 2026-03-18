# Define a imagem base - usa Nginx como servidor web
FROM nginx:alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/share/nginx/html

# Remove os arquivos padrão do Nginx
RUN rm -rf *

# Copia todos os arquivos do diretório front_end local para o container
COPY . .

# Expõe a porta 80 para acesso externo
EXPOSE 80

# Define o comando padrão para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
