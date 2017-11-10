import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNote} from '../actions/saveNoteAction.js';
import axios from 'axios';

class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEditor: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.prepToSave = this.prepToSave.bind(this);
    console.log('**FROM PATIENT NOTES ALLNOTES',this.props.allNotes);
  }

  onComponentDidMount() {
    axios.get('/notes', {patientId:this.props.patient.id})
    .then(notes => {
      console.log('*&^*&^*&^notes', notes)
      this.setState = {currentNotes:notes}
    });
  }

  handleChange(e) {
    this.setState({
      noteEditor: e.target.value
    })
  }

  prepToSave(e) {
    e.preventDefault();

    this.props.saveNote(this.state.noteEditor);

    axios.post('/notes', {
      patientId: this.props.patient.patient.id,
      note: this.state.noteEditor
    }).then(response => {
      console.log('**AFTER SAVING NOTE',response);
    }).catch(err => {
      console.log(err);
    });

    this.setState({
      noteEditor: ''
    });
  } 

  render() {
    return (
      <div>
        <h4>Patient Notes:</h4>
        {this.props.allNotes.map(note => {
          return <li key={note.id}>{note.note}</li>
        })}
        <input value={this.state.noteEditor} onChange={this.handleChange}/>
        <button type="button" onClick={this.prepToSave}>Save note</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    patient: state.activePatient
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({saveNote: saveNote}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientNotes);