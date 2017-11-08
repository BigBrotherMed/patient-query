import React from 'react';
import {connect} from 'react-redux';

class ActivePatient extends React.Component {
  render() {
    if (!this.props.patient) 
      return (
        <div>
          <p>Active patient component goes here</p>
        </div>
      );
    
    return (
      <div>
        <p>Active patient component goes here</p>
        <p>{this.props.patient.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    patient: state.activePatient
  }
}

export default connect(mapStateToProps)(ActivePatient);