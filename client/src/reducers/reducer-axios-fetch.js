export default function(state=null, action) {
  switch (action.type) {
    case "AXIOS_FETCH_ALL_PATIENTS":
      return action.payload;
      break;
  }
  return state;
}