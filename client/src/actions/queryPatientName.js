export const queryPatient = (query, fullList) => {
  return {
    type: "SUBMIT_QUERY",
    payload: {query: query, patients: fullList}
  }
}