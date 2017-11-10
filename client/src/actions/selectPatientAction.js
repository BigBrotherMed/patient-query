import axios from 'axios';

export const selectPatient = user => {
  console.log(`You clicked on user: ${user.id}`, user); 
  const payloadObj = {};
  axios.get('/notes', {patientId: user.id})
  .then(notes => {
    payloadObj.notes = notes.data;
    axios.get('/patients', {id: user.id})
    .then(patient => {
      payloadObj.patient = patient;
      console.log('*@#&$^*#&^PAYLOAD OBJECT', payloadObj);
      return {
        type: "PATIENT_SELECTED",
        payload: payloadObj
      }
    })
  })
}