import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPatient} from '../actions/selectPatientAction.js';
import {axiosFetch} from '../actions/axiosFetchAction.js';
import axios from 'axios';

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.patients
    }
  }

  componentWillMount() {
    axios.get('/patients')
      .then(response => {
        console.log('WILL MOUNT DATA: ', response);
        this.props.axiosFetch(response.data)
      })
      .catch(err => {if(err) { throw err }})
  }

  componentWillReceiveProps(props) {
    if(props.queryPatient !== null) {
      this.setState({list: props.queryPatient})
    } else if(props.axiosFetcher.patients !== null) {
      this.setState({list: props.axiosFetcher.patients})
    }
  }

  createListItems() {
    return this.state.list.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectPatient(user)}>{user.firstName} {user.lastName}</li>
      );
    })
  }

  render() {
    return (
      <div>
        <p>Patient List component goes here</p>
        {this.createListItems()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    patients: state.patients,
    queryPatient: state.queryPatient,
    axiosFetcher: state.axiosFetcher
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectPatient: selectPatient, axiosFetch: axiosFetch}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientList);