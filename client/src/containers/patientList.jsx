import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPatient} from '../actions/selectPatientAction.js';
// import fhirpatients from '../../../api-data/index.js'; why won't this work?

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.patients
    }
  }

  // componentWillMount() {
  //   fhirpatients.getAllPatients((err, data) => console.log(data));
  // }

  componentWillReceiveProps(props) {
    if(props.queryPatient !== null) {
      this.setState({list: props.queryPatient})
    }
  }

  createListItems() {
    return this.state.list.map(user => {
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
    patients: state.patients,
    queryPatient: state.queryPatient
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectPatient: selectPatient}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PatientList);