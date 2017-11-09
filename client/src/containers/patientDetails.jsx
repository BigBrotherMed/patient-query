import React from 'react';
import {connect} from 'react-redux';
import PatientNotes from './patientNotes.jsx';

class PatientDetails extends React.Component {

  render() {
    if (!this.props.patient)
      return (
        <div>
          <h3>Patient Details</h3>
          <p>No patient selected</p>
        </div>
      );
      
    return (
      <div>
        <h3>Patient Details</h3>
        <p>Name: {this.props.patient.name}</p>
        <PatientNotes />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    patient: state.activePatient 
  }
}

export default connect(mapStateToProps)(PatientDetails);