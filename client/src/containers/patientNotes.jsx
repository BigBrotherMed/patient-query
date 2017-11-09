import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNote} from '../actions/saveNoteAction.js';

class PatientNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      noteEditor: '',
      currentNotes: ['note1', 'note2', 'note3']
    }
    this.handleChange = this.handleChange.bind(this);
    this.prepToSave = this.prepToSave.bind(this);
  }

  handleChange(e) {
    this.setState({
      noteEditor: e.target.value
    })
  }

  prepToSave(e) {
    e.preventDefault();
    console.log(this.state.noteEditor);
    let noteToSave = this.state.currentNotes.slice();
    noteToSave.push(this.state.noteEditor);
    this.props.saveNote(this.state.noteEditor);
    this.setState({
      noteEditor: '',
      currentNotes: noteToSave
    });
  } 

  render() {
    return (
      <div>
        <h4>Patient Notes:</h4>
        {this.state.currentNotes.map( (note, index) => {
          return <li key={index}>{note}</li>
        })}
        <input value={this.state.noteEditor} onChange={this.handleChange}/>
        <button type="button" onClick={this.prepToSave}>Save note</button>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({saveNote: saveNote}, dispatch)
}

export default connect(null, matchDispatchToProps)(PatientNotes);