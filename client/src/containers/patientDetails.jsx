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
        <p>First name: {this.props.patient.firstName}</p>
        <p>Last name: {this.props.patient.lastName}</p>
        <p>Birthdate: {this.props.patient.birthdate}</p>
        <p>Gender: {this.props.patient.gender}</p>
        <p>Street: {this.props.patient.address}</p>
        <p>City: {this.props.patient.city}</p>
        <p>Zip: {this.props.patient.zip}</p>
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