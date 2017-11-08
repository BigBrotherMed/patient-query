import {combineReducers} from 'redux';
import patientReducer from './reducer-patients';

const allReducers = combineReducers({
  patients: patientReducer
});

export default allReducers;