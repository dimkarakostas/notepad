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

NOTES = []


@app.route('/add', methods=['POST'])
def add():
    '''
    Add a note

    POST params: <str> content
    '''
    data = request.get_json()
    note_content = data['content']

    logger.debug('Adding note {}...'.format(note_content))

    NOTES.append(note_content)

    msg = 'Note {} was added.'.format(note_content)
    logger.debug(msg)

    return msg, 200


@app.route('/read', methods=['GET'])
def read():
    '''
    Get all notes
    '''
    logger.debug('Sending total notes: {}'.format(len(NOTES)))

    return jsonify(**{'notes': NOTES}), 200


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)
