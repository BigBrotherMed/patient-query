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
      <h4>Current Medication</h4>


      <Well>
        {props.medication.map(order => 
          <div key={order.idMedication}>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col sm={2}><h4><Label bsStyle="warning">Medication</Label></h4></Col>
                  <Col sm={10}><h4>{order.medicationText}</h4></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col sm={6}><h4><Label bsStyle="warning">Dosage</Label>  {order.dosageInstruction}</h4></Col>
                  <Col sm={6}><h4><Label bsStyle="warning">Frequency</Label>  {order.dosageFrequency}</h4></Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </div>
        )}
      </Well>
    </div>
  )
}

export default PatientMedOrders;