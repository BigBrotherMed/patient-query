const sequelize = require('./index.js');
const jwt = require('jsonwebtoken');
const SECRET = require('../config/config.js');

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

exports.createCredentials = (credentials, callback) => {
  console.log('@@@@DB CONTROLLER CREDENTIALS', credentials);
  console.log('!!!!SECRET!!!!', SECRET.newAccountCode);
  if (credentials.secret !== SECRET.newAccountCode) {
    callback('secret error');
    return;
  }

  //looks for username in login table
  sequelize.models.login.findAll({
    where: {
      username: credentials.username
    }
  }).then(username => {

    //could not find in logins table
    if (!username || username.length === 0) {

      //add username to login table
      sequelize.models.login.create({
        username: credentials.username
      })

      //add jwt to credentials table (no need to chain to logins)
      sequelize.models.credential.create({
        loginInfo: jwt.sign(credentials, SECRET.jwtCode)
      }).then(() => {
        callback('success');
      });

    } else {
      callback('username error');
    }
  })
}