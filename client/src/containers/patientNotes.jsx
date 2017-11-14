import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNote} from '../actions/saveNoteAction.js';
import axios from 'axios';
import { ListGroup, ListGroupItem, Grid, Row, Col, FormControl, Button, Well, Label} from 'react-bootstrap';

class PatientNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteEditor: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.prepToSave = this.prepToSave.bind(this);
    this.sortNotes = this.sortNotes.bind(this)
  }

  handleChange(e) {
    this.setState({
      noteEditor: e.target.value
    })
  }

  prepToSave(e) {
    e.preventDefault();

    axios.post('/notes', {
      patientId: this.props.patient.patient.id,
      note: this.state.noteEditor
    }).then(response => {
      let newPayload = {
        patient: this.props.patient.patient,
        notes: response.data,
        medication: this.props.patient.medication
      };
        this.props.saveNote(newPayload);
    }).catch(err => {
      console.error(err);
    });

    this.setState({
      noteEditor: ''
    });
  } 
  sortNotes (b, a) {
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <div>
      <Well>
        <Grid>
          <Row>
            <Col sm={9}>
              <FormControl
                type="text"
                value={this.state.noteEditor}
                placeholder="Enter New Note"
                onChange={this.handleChange}
              />      
            </Col> 
            <Col sm={3}>
              <Button  bsSize="small" bsStyle="danger"onClick={this.prepToSave}>Save Note</Button>
            </Col>
     
          </Row>
        </Grid>
      </Well>
      <Well>
        {!this.props.patient.notes || this.props.patient.notes.length === 0 ?
          <div><h4>No Notes for this Patient</h4></div> : null}


        <ListGroup>
          {this.props.patient.notes.sort(this.sortNotes).map(note => 
            <ListGroupItem className="listEntry" key={note.id} bsStyle="danger">
              <Row>
                <Col sm={1}></Col>
                <Col sm={3}><h4><Label bsStyle="danger">{note.createdAt.slice(0, 10)}</Label></h4></Col>
                <Col sm={8}><h5>{ note.note }</h5> </Col>
              </Row>
            </ListGroupItem>
          )}
        </ListGroup>
      </Well>
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