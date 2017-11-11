import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {queryPatient} from '../actions/queryPatientName.js';
import { Col, Row, Well } from 'react-bootstrap';

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
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <input value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Last Name" />
            <button onClick={() => this.props.queryPatient(this.state, this.props.axiosFetcherResults.patients)}> Search </button>
            <button onClick={() => this.props.queryPatient({lastName: ''}, this.props.axiosFetcherResults.patients)}> Clear </button>
          </Col>
        </Row>

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