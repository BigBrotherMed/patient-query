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
        <button onClick={() => this.props.queryPatient()}> Query </button>

      </div>



    )
  }
}

// const Query = () => (
//   <div>
//     <p>Query component goes here</p>
//   </div>
// );

export default Query;