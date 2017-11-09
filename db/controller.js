const sequelize = require('./index.js');

exports.addNote = (patientId, note) => {
  sequelize.models.note.create();
}