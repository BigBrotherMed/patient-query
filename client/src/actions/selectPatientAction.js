export const selectPatient = user => {
  console.log(`You clicked on user ${user.name}`);
  return {
    type: "PATIENT_SELECTED",
    payload: user
  }
}