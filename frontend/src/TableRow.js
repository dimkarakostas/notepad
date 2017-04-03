import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote() {
        axios.post(config.BACKEND_URL + '/delete', {
            id: this.props.row.index
        })
        .then((res) => {
            console.log(res);
            this.props.rowNotes();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.row.index}</th>
                <td>{this.props.row.note}</td>
                <td>
                </td>
                <td>
                </td>
            </tr>
        );
    }
}
