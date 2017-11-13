import axios from 'axios';

export const selectPatient = payloadObj => {

  return {
    type: "PATIENT_SELECTED",
    payload: payloadObj
  }
}