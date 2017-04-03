import React, { Component } from 'react';
import TableRow from './TableRow';

export default class TableBody extends Component {
    constructor(props) {
        super(props);
        this.getTableRows = this.getTableRows.bind(this);
    }

    getTableRows() {
        return this.props.tableRows.map((note, index) => {
            return <TableRow row={{note: note, index: index}} rowNotes={() => {this.props.bodyNotes();}} key={index} />;
        });
    }

    render() {
        return (
        <tbody>
            {this.getTableRows()}
        </tbody>
        );
    }
}
