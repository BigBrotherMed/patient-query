import {combineReducers} from 'redux';
import patientReducer from './reducer-patients';
import activePatientReducer from './reducer-active-patient';
import queryPatientReducer from './reducer-query.js';
import axiosFetcherReducer from './reducer-axios-fetch.js';

const allReducers = combineReducers({
  patients: patientReducer,
  activePatient: activePatientReducer,
  queryPatient: queryPatientReducer,
  axiosFetcher: axiosFetcherReducer,
});

export default allReducers;