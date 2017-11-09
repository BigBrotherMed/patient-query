export const selectPatient = user => {
  console.log(`You clicked on user: ${user.firstName}`, user);
  return {
    type: "PATIENT_SELECTED",
    payload: user
  }
}