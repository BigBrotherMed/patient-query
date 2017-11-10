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
        <h4>Filter</h4>
        <input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
        <button onClick={() => this.props.queryPatient(this.state, this.props.axiosFetcherResults.patients)}> Query </button>
        <button onClick={() => this.props.queryPatient({firstName: ''}, this.props.axiosFetcherResults.patients)}> Clear </button>
      </div>
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