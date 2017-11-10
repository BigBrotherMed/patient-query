import React from 'react';
import {connect} from 'react-redux';
import PatientNotes from './patientNotes.jsx';

class PatientDetails extends React.Component {

  render() {
    if (!this.props.activePatient)
      return (
        <div>
          <h3>Patient Details</h3>
          <p>No patient selected</p>
        </div>
      );
      
    return (
      <div>
        <h3>Patient Details</h3>
        <p>First name: {this.props.activePatient.patient.firstName}</p>
        <p>Last name: {this.props.activePatient.patient.lastName}</p>
        <p>Birthdate: {this.props.activePatient.patient.birthdate}</p>
        <p>Gender: {this.props.activePatient.patient.gender}</p>
        <p>Street: {this.props.activePatient.patient.address}</p>
        <p>City: {this.props.activePatient.patient.city}</p>
        <p>Zip: {this.props.activePatient.patient.zip}</p>
        <p>Email: {this.props.activePatient.patient.email}</p>
        <PatientNotes allNotes={this.props.activePatient.notes}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    activePatient: state.activePatient
  }
}

export default connect(mapStateToProps)(PatientDetails);