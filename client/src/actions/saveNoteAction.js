// let sequelize = require('../../../db/index.js');
// import sequelize from '../../../db/index.js';

export const saveNote = noteText => {
  console.log(`You are trying to save note: ${noteText}`);
  // sequelize.models.note.create({id:1, note:noteText}).then(() => {
  //   sequelize.model.note.findAll({where: {}}).then(allNotes => {
      return {
        type: "SAVE_NOTE",
        payload: allNotes
      }
  //   })
  // })
}