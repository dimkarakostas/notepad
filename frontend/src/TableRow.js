import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import config from './config';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
        this.isLink = this.isLink.bind(this);
    }

    deleteNote() {
        axios.post(config.BACKEND_URL + '/delete', {
            id: this.props.row.index
        })
        .then((res) => {
            this.props.rowNotes();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    isLink(note) {
        var exp = /(^(https?|http|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])($(\S?))/ig;
        return exp.test(note);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.row.index}</th>
                <td>
                    {this.isLink(this.props.row.note) ?
                        <a href={this.props.row.note} target="_blank">{this.props.row.note}</a> :
                        this.props.row.note
                    }
                </td>
                <td>
                    <button onClick={() => {this.deleteNote();}}>
                        Delete
                    </button>
                </td>
                <td>
                    <CopyToClipboard text={this.props.row.note} onCopy={this.onCopy}>
                        <button>Copy</button>
                    </CopyToClipboard>
                </td>
            </tr>
        );
    }
}
