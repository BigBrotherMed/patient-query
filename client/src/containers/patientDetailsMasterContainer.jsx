import React from 'react';
import {connect} from 'react-redux';
import PatientDetailsDefaultView from './patientDetailsDefaultView.jsx';
import PatientNotes from './patientNotes.jsx';
import PatientMedOrders from './patientMedOrders.jsx';
import { ListGroup, ListGroupItem, Row, Col, Label, Well } from 'react-bootstrap';


class PatientDetailsMasterContainer extends React.Component {

  render() {
    if (!this.props.activePatient)
      return (
        <Well>
          <h5>Select a Patient to view Details </h5>
        </Well>
      );
      
    return (
      <Well>
        <PatientDetailsDefaultView patient={this.props.activePatient.patient}/>
        <PatientNotes allNotes={this.props.activePatient.notes}/>
        <PatientMedOrders medication={this.props.activePatient.medication}/>
      </Well>
    );
  }

}

function mapStateToProps(state) {
  return {
    activePatient: state.activePatient
  }
}

export default connect(mapStateToProps)(PatientDetailsMasterContainer);