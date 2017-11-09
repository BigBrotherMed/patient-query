export const queryPatient = query => {
  console.log(`SUBMIT QUERY ${JSON.stringify(query)}`);
  return {
    type: "SUBMIT_QUERY",
    payload: query
  }
}