import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

export default class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addNote() {
        axios.post(config.BACKEND_URL + '/add', {
            content: this.state.value
        })
        .then(res => {
            this.props.readNotes();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addNote()
        this.setState({value: ''});
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input type="text" autoFocus placeholder="Your note..." value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
