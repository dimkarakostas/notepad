import React, { Component } from 'react';
import './App.css';
import NewNoteForm from './NewNoteForm';
import axios from 'axios';
import config from './config';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };

        this.readNotes = this.readNotes.bind(this);
        this.readNotes();
    }

    readNotes() {
        axios.get(config.BACKEND_URL + '/read')
        .then(res => {
            console.log(res.data);
            this.setState({notes: res.data.notes});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                <NewNoteForm readNotes={() => {this.readNotes();}} />
            </div>
        );
    }
}

export default App;
