export default function(state=null, action) {
  switch (action.type) {
    case "PATIENT_SELECTED":
      return action.payload;
      break;
    case "UPDATE_NOTES":
      return action.payload;
      break;
  }
  return state;
}