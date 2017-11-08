import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PatientList extends React.Component {
  createListItems() {
    return this.props.patients.map(user => {
      return (
        <li key={user.id}>{user.name}</li>
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

export default connect(mapStateToProps)(PatientList);