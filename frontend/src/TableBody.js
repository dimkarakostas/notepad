import React, { Component } from 'react';

export default class TableBody extends Component {
    constructor(props) {
        super(props);
        this.getTableRows = this.getTableRows.bind(this);
    }

    getTableRows() {
        return this.props.tableRows.map((note, index) => {
            return '';
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
