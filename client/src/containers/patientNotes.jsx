import React from 'react';
import {connect} from 'react-redux';

class PatientNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      noteEditor: '',
      currentNotes: ['note1', 'note2', 'note3']
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  handleChange(e) {
    this.setState({
      noteEditor: e.target.value
    })
  }

  saveNote(e) {
    e.preventDefault();
    let noteToSave = this.state.currentNotes.slice();
    noteToSave.push(this.state.noteEditor);
    this.setState({
      noteEditor: '',
      currentNotes: noteToSave
    })
  } 

  render() {
    return (
      <div>
        <h4>Patient Notes:</h4>
        {this.state.currentNotes.map( (note, index) => {
          return <li key={index}>{note}</li>
        })}
        <input value={this.state.noteEditor} onChange={this.handleChange}/>
        <button type="button" onClick={this.saveNote}>Save note</button>
      </div>
    )
  }
}

export default PatientNotes;