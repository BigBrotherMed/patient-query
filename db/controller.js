const sequelize = require('./index.js');

//This function takes in the patient ID and a note to add. Callback parameter is
//invoked on success with all notes associated with current patient
exports.addNote = (patientId, note, callback) => {
  sequelize.models.note.create({patientId:patientId, note:note})
  .then(() => {
    sequelize.models.note.findAll({where: {patientId:patientId}})
    .done(allNotes => {
      callback(allNotes);
    })
  });
}

//Callback is invoked on success  
exports.getNotes = (patientId, callback) => {
  sequelize.models.note.findAll({where: {patientId:patientId}})
  .done(allNotes => {
    callback(allNotes);
  })
}