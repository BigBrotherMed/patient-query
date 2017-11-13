import React from 'react';
import { ListGroup, ListGroupItem, Col, Row, Well, Label } from 'react-bootstrap';

const PatientMedOrders = (props) => {
  if (!props.medication || props.medication.length === 0)
    return (
      <div>
        <p>No current medication orders for this patient</p>
      </div>
    );

  return (
    <div>
      {props.medication.map(order => 
        <div key={order.idMedication}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col sm={3}><Label bsStyle="warning">Medication</Label></Col>
                <Col sm={7}>{order.medicationText}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col sm={6}><Label bsStyle="warning">Dosage</Label>  {order.dosageInstruction}</Col>
                <Col sm={6}><Label bsStyle="warning">Frequency</Label>  {order.dosageFrequency}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </div>
      )}
    </div>
  )
}

export default PatientMedOrders;