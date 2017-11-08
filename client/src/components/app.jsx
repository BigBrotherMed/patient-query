import React from 'react';
import Query from '../containers/query.jsx';
import PatientList from '../containers/patientList.jsx';
import ActivePatient from '../containers/activePatient.jsx';

const App = () => (
  <div>
    <h1>Patient Query</h1>
    <Query />
    <PatientList />
    <ActivePatient />
  </div>
);

export default App;