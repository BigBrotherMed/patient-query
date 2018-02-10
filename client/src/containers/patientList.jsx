import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPatient} from '../actions/selectPatientAction.js';
import {axiosFetcher} from '../actions/axiosFetchAction.js';
import axios from 'axios';
import { ListGroup, ListGroupItem, PageHeader, Col, Row, Well, Label, Grid, Button } from 'react-bootstrap';

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.patients
    }
    this.prepBeforeActivePatientChange = this.prepBeforeActivePatientChange.bind(this);
    this.sortById = this.sortById.bind(this);
    this.sortByLastName = this.sortByLastName.bind(this);
  }

  componentDidMount() {

  }

  componentWillMount() {
    axios.get('/patients')
      .then(response => {
        this.props.axiosFetcher(response.data)
        this.prepBeforeActivePatientChange(this.state.list[0]);
      })
      .catch(err => {if(err) { throw err }})
  }

  componentWillReceiveProps(props) {
    if(props.queryPatient !== null) {
      this.setState({list: props.queryPatient})
    } else if(props.axiosFetcherResults.patients !== null) {
      this.setState({list: props.axiosFetcherResults.patients})
    }
  }

  prepBeforeActivePatientChange(user) {
    const payloadObj = {};
    let queryUrl = '/notes?id='+user.id;
    axios.get(queryUrl)
    .then(notes => {
      payloadObj.notes = notes.data;
      let queryUrl = '/patients?id=' + user.id;
      axios.get(queryUrl)
      .then(patient => {        
        payloadObj.patient = patient.data.patient;

        let queryUrl = '/medication_orders?patientId=' + user.id;
        axios.get(queryUrl)
        .then(orders => {
          payloadObj.medication = orders.data.orders;

          this.props.selectPatient(payloadObj);
        })
      })
    })
  }

  createListItems() {
    return this.state.list.map(user => {
      return (
        <ListGroupItem className="listEntry" 
            key={user.id} 
            onClick={() => this.prepBeforeActivePatientChange(user)}>
          <Row>
 
            <Col sm={4}>{ user.id.slice(0, 6) }...</Col>
            <Col sm={8}>{ user.lastName }, { user.firstName } </Col>
          </Row>
        </ListGroupItem>
      );
    })
  }

  sortByLastName() {
    this.setState({list:
      this.state.list.sort(function (a, b) {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      })
    }); 
  }

  sortById() {
    this.setState({list:
      this.state.list.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    });     
  }

  render() {
    return (

            <ListGroup>        
              <ListGroupItem className="listEntry">
                <Row>
   
                  <Col sm={4}><Button bsStyle="primary" bsSize="xsmall" onClick={this.sortById}>Sort by ID</Button></Col>
                  <Col sm={8}><Button bsStyle="primary" bsSize="xsmall" onClick={this.sortByLastName}>Sort by Name</Button></Col>
                </Row>
              </ListGroupItem>
              {this.createListItems()}
            </ListGroup>

    )
  }
}

function mapStateToProps(state) {
  return {
    patients: state.patients,
    queryPatient: state.queryPatient,
    axiosFetcherResults: state.axiosFetcher
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectPatient: selectPatient, axiosFetcher: axiosFetcher}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientList);