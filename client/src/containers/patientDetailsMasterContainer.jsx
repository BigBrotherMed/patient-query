import React from 'react';
import {connect} from 'react-redux';
import PatientDetailsDefaultView from './patientDetailsDefaultView.jsx';
import PatientNotes from './patientNotes.jsx';
import PatientMedOrders from './patientMedOrders.jsx';
import { ListGroup, ListGroupItem, Row, Col, Label, Well, Button, ButtonToolbar, Grid} from 'react-bootstrap';



class PatientDetailsMasterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      view: 0
    }

    this.viewDetails = this.viewDetails.bind(this);
    this.viewMeds = this.viewMeds.bind(this);
    this.viewNotes = this.viewNotes.bind(this);
    this.DETAIL_ID = 0;
    this.MEDS_ID = 1;
    this.NOTES_ID = 2;
  }


  viewDetails() {
    this.setState({view: this.DETAIL_ID})
  }
  viewMeds() {
    this.setState({view: this.MEDS_ID})
  }
  viewNotes() {
    this.setState({view: this.NOTES_ID})
  }

  render() {
    return (
      <Grid>
        <Row>
          <Well>
            <Row>
              <Col sm={5}>
                <ListGroupItem bsStyle="info">
                  
                    {this.props.activePatient ? 
                      this.props.activePatient.patient.lastName + ', ' + 
                      this.props.activePatient.patient.firstName 
                      : null}
                  
                </ListGroupItem>
              </Col>
             <Col sm={7}>
                <ButtonToolbar>
                  <Button onClick={ this.viewDetails } bsSize="small" bsStyle="primary"> Details </Button>
                  <Button onClick={ this.viewMeds } bsSize="small" bsStyle="warning">Medication</Button>
                  <Button onClick={ this.viewNotes } bsSize="small" bsStyle="danger"> Notes </Button>
                             
                </ButtonToolbar>
              </Col>

            </Row>
          </Well>
          <Well>
            {!this.props.activePatient ?
              <h3>Loading...</h3> : 
              <div> 
                {this.state.view === this.DETAIL_ID ? 
                  <PatientDetailsDefaultView patient={this.props.activePatient.patient}/> : null}

                {this.state.view === this.MEDS_ID ?
                  <PatientMedOrders medication={this.props.activePatient.medication}/> : null}
                {this.state.view === this.NOTES_ID ?
                  <PatientNotes allNotes={this.props.activePatient.notes}/> : null}

              </div>
            }
          </Well>
       </Row>
     </Grid>
    )
  }

}

function mapStateToProps(state) {
  return {
    activePatient: state.activePatient
  }
}

export default connect(mapStateToProps)(PatientDetailsMasterContainer);