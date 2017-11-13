import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {queryPatient} from '../actions/queryPatientName.js';
import { Grid, Col, Row, Well, Button, ButtonToolbar, FormControl } from 'react-bootstrap';

class Query extends React.Component {
  constructor() {
    super();

    this.state = {
      lastName: ''
    }
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8}>
            <FormControl type="text"
              value={this.state.lastName}
              placeholder="Enter Last Name"
              onChange={this.handleLastNameChange}
            />
          </Col>
          <Col sm={4}>
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="small" onClick={() => 
                this.props.queryPatient(this.state, this.props.axiosFetcherResults.patients)}> 
                Search 
              </Button>
              <Button bsStyle="primary" bsSize="small" onClick={() => 
                this.props.queryPatient({lastName: ''}, this.props.axiosFetcherResults.patients)}> 
                Clear 
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    patients: state.patients,
    axiosFetcherResults: state.axiosFetcher
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({queryPatient: queryPatient}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Query);