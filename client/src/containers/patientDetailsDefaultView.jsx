import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Label } from 'react-bootstrap';

const PatientDetailsDefaultView = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">First name</Label></Col>
          <Col sm={4}>{props.patient.firstName}</Col>
          <Col sm={2}><Label bsStyle="primary">Last name</Label></Col>
          <Col sm={4}>{props.patient.lastName}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">Birthdate</Label></Col> 
          <Col sm={4}>{props.patient.birthdate}</Col>
          <Col sm={2}><Label bsStyle="primary">Gender</Label></Col>
          <Col sm={4}>{props.patient.gender}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">Street</Label></Col>
          <Col sm={10}>{props.patient.address}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">City</Label></Col>
          <Col sm={4}>{props.patient.city}</Col>
          <Col sm={2}><Label bsStyle="primary">Zip</Label></Col>
          <Col sm={4}>{props.patient.zip}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">Phone</Label></Col>
          <Col sm={10}>{props.patient.phone}</Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col sm={2}><Label bsStyle="primary">Email</Label></Col>
          <Col sm={10}>{props.patient.email}</Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}

export default PatientDetailsDefaultView;