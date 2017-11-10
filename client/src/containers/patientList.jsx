import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPatient} from '../actions/selectPatientAction.js';
import {axiosFetcher} from '../actions/axiosFetchAction.js';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.patients
    }
    this.prepBeforeActivePatientChange = this.prepBeforeActivePatientChange.bind(this);
  }

  componentWillMount() {
    axios.get('/patients')
      .then(response => {
        this.props.axiosFetcher(response.data)
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
          // console.log('****MEDICATION ORDERS: ', orders.data.orders)
          payloadObj.medication = orders.data.orders;

          this.props.selectPatient(payloadObj);
        })
      })
    })
  }

  createListItems() {
    return this.state.list.map(user => {
      return (
        <ListGroupItem key={user.id} onClick={() => this.prepBeforeActivePatientChange(user)}>{user.firstName} {user.lastName}</ListGroupItem>
      );
    })
  }

  render() {
    return (
      <div>
        <h4>Patient List</h4>
        <ListGroup>
          {this.createListItems()}
        </ListGroup>
      </div>
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