export const saveNote = noteText => {
  console.log(`You are trying to save note: ${noteText}`);
    return {
      type: "SAVE_NOTE",
      payload: noteText
    }
}