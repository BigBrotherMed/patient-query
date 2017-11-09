import React from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import PatientDetails from '../containers/patientDetails.jsx';

const App = () => (
  <div>
    <h1>Patient Query</h1>
    <Query />
    <PatientList />
    <PatientDetails />
  </div>
);

export default App;