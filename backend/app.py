import logging
from flask import Flask, request, jsonify

app = Flask(__name__)

level = logging.DEBUG
logger = logging.getLogger('notepad')
logger.setLevel(level)
FORMAT = '%(asctime)s - %(name)s - %(levelname)s: %(message)s'
logging.basicConfig(format=FORMAT)

console_handler = logging.StreamHandler()
logger.addHandler(console_handler)

app.config['SECRET_KEY'] = 'https://github.com/dimkarakostas/notepad.git'


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)
