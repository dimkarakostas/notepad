import React, { Component } from 'react';

export default class TableRow extends Component {
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
