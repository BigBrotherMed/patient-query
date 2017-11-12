import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Label, Well } from 'react-bootstrap';

const PatientDetailsDefaultView = (props) => {
      
  return (

    <Well>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col sm={6}><h4><Label bsStyle="info">First name</Label>  {props.patient.firstName}</h4></Col>
            <Col sm={6}><h4><Label bsStyle="info">Last name</Label>  {props.patient.lastName}</h4></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col sm={6}><h4><Label bsStyle="info">Birthdate</Label>  {props.patient.birthdate}</h4></Col>
            <Col sm={6}><h4><Label bsStyle="info">Gender</Label>  {props.patient.gender}</h4></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col sm={12}><h4><Label bsStyle="info">Street</Label>  {props.patient.address}</h4></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col sm={6}><h4><Label bsStyle="info">City</Label>  {props.patient.city}</h4></Col>
            <Col sm={6}><h4><Label bsStyle="info">Zip</Label>  {props.patient.zip}</h4></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col sm={12}><h4><Label bsStyle="info">Phone</Label>  {props.patient.phone}</h4></Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col sm={12}><h4><Label bsStyle="info">Email</Label>  {props.patient.email}</h4></Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Well>
  )
}

export default PatientDetailsDefaultView;