import axios from 'axios';

export const selectPatient = payloadObj => {

  console.log(`You clicked on user: ${payloadObj.patient.id}`, payloadObj.patient); 
  return {
    type: "PATIENT_SELECTED",
    payload: payloadObj
  }
}