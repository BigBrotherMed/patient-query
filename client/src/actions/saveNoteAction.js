export const saveNote = payloadObj => {
    return {
      type: "UPDATE_NOTES",
      payload: payloadObj
    }
}