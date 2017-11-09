
export const axiosFetcher = (axiosResults) => {
  return {
    type: "AXIOS_FETCH_ALL_PATIENTS",
    payload: axiosResults
  }

}