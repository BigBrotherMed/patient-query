export default function(state=null, action) {
  switch (action.type) {
    case "SAVE_NOTE":
      return action.payload;
      break;
  }
  return state;
}