import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPatient} from '../actions/selectPatientAction.js';

class PatientList extends React.Component {
  createListItems() {
    return this.props.patients.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectPatient(user)}>{user.name}</li>
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
    patients: state.patients
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectPatient: selectPatient}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientList);