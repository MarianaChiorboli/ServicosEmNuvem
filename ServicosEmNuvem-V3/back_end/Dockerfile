FROM python:3.9-slim

WORKDIR /app

# Copia o backend
COPY back_end/app.py .

# Copa a imagem
COPY back_end/image.jpeg .

# Instala dependências
RUN pip install --no-cache-dir flask flask-cors

EXPOSE 25000

CMD ["python", "app.py"]