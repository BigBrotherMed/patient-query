import React from 'react';
import { ListGroup, ListGroupItem, Col, Row, Well, Label } from 'react-bootstrap';

const PatientMedOrders = (props) => {
  if (!props.medication || props.medication.length === 0)
    return (
      <div>
        <h4>No Medication Orders for this Patient</h4>
      </div>
    );

  return (
    <div>
      {props.medication.map(order => 
        <div key={order.idMedication}>
          <ListGroup>
            <ListGroupItem bsStyle="warning">
              <Row>
                <Col sm={2}><Label bsStyle="warning">Medication</Label></Col>
                <Col sm={10}>{order.medicationText}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </div>
      )}
    </div>
  )
}

export default PatientMedOrders;