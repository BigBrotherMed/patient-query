import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {queryPatient} from '../actions/queryPatientName.js';

class Query extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  

  render() {
    return (
      <div>
        <input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
        <button onClick={() => this.props.queryPatient(this.state, this.props.patients)}> Query </button>

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
  return bindActionCreators({queryPatient: queryPatient}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Query);