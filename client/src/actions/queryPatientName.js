export const queryPatientName = user => {
  console.log(`You clicked on user ${user.name}`);
  return {
    type: "SUBMIT_QUERY",
    payload: user
  }
}