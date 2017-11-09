export default function(state=null, action) {
  switch (action.type) {
    case "SUBMIT_QUERY":
      let results =[];
      for(let i = 0; i < action.payload.patients.length; i++) {
        if(action.payload.patients[i].firstName.includes(action.payload.query.firstName)) {
          results.push(action.payload.patients[i]);
        }
      }
      return results;
      break;
  }
  return state;
}