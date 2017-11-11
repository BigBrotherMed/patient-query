import React from 'react';
import {connect} from 'react-redux';
import PatientNotes from './patientNotes.jsx';
import PatientMedOrders from './patientMedOrders.jsx';
import { ListGroup, ListGroupItem, Row, Col, Label, Well } from 'react-bootstrap';


class PatientDetails extends React.Component {

  render() {
    if (!this.props.activePatient)
      return (
        <Well>
          <h5>Select a Patient to view Details </h5>
        </Well>
      );
      
    return (
      <Well>
        <ListGroup>
          <ListGroupItem>
            <Row>
              <Col sm={6}><h4><Label bsStyle="info">First name</Label>  {this.props.activePatient.patient.firstName}</h4></Col>
              <Col sm={6}><h4><Label bsStyle="info">Last name</Label>  {this.props.activePatient.patient.lastName}</h4></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col sm={6}><h4><Label bsStyle="info">Birthdate</Label>  {this.props.activePatient.patient.birthdate}</h4></Col>
              <Col sm={6}><h4><Label bsStyle="info">Gender</Label>  {this.props.activePatient.patient.gender}</h4></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col sm={12}><h4><Label bsStyle="info">Street</Label>  {this.props.activePatient.patient.address}</h4></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col sm={6}><h4><Label bsStyle="info">City</Label>  {this.props.activePatient.patient.city}</h4></Col>
              <Col sm={6}><h4><Label bsStyle="info">Zip</Label>  {this.props.activePatient.patient.zip}</h4></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col sm={12}><h4><Label bsStyle="info">Phone</Label>  {this.props.activePatient.patient.phone}</h4></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col sm={12}><h4><Label bsStyle="info">Email</Label>  {this.props.activePatient.patient.email}</h4></Col>
            </Row>
          </ListGroupItem>
        </ListGroup>


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

export default connect(mapStateToProps)(PatientDetails);