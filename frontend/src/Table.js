import React, { Component } from 'react';

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
            </table>
        );
    }
}
