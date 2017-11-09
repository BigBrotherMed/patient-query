
export const axiosFetch = (axiosResults) => {
  console.log('ACTION TRIGGERED');
  return {
    type: "AXIOS_FETCH_ALL_PATIENTS",
    payload: axiosResults
  }

}