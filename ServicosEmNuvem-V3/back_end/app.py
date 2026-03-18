from flask import Flask, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/foto')
def get_foto():
    return send_file('image.jpeg', mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=25000)