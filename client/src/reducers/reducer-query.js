export default function(state=null, action) {
  switch (action.type) {
    case "SUBMIT_QUERY":
      return action.payload;
      break;
  }
  return state;
}