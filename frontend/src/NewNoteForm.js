import React, { Component } from 'react';

export default class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: ''});
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your note..." value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
