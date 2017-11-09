import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNote} from '../actions/saveNoteAction.js';
import axios from 'axios';

class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEditor: '',
      currentNotes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.prepToSave = this.prepToSave.bind(this);
    console.log(this.props.patientId);
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

    let noteToSave = this.state.currentNotes.slice();
    noteToSave.push(this.state.noteEditor);
    this.props.saveNote(this.state.noteEditor);

    axios.post('/notes', {
      patientId: this.props.patient.id,
      note: this.state.noteEditor
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });

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

function mapStateToProps(state) {
  return {
    patient: state.activePatient
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({saveNote: saveNote}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientNotes);