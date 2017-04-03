import React, { Component } from 'react';
import TableBody from './TableBody';

export default class Table extends Component {
    render() {
        return (
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="col-md-1">#</th>
                        <th className="col-md-9">Note</th>
                        <th className="col-md-1"></th>
                        <th className="col-md-1"></th>
                    </tr>
                </thead>
                <TableBody tableRows={this.props.notes} bodyNotes={() => {this.props.tableNotes();}} />
            </table>
        );
    }
}
