const sequelize = require('./index.js');
// const jwt = require('jsonwebtoken');
const SECRET = require('../config/config.js');
const saltRounds = 10;
const bcrypt = require('bcrypt');

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

exports.checkCredentials = (credentials, callback) => {
  // const credsToSave = {
  //   username: credentials.username,
  //   password: credentials.password
  // }
  // const cred = jwt.sign(credsToSave, SECRET.jwtCode);
  // console.log('#####during check: ', credsToSave);
  // console.log('#####during check: ', cred);
  

  const creds = JSON.parse(credentials);

  sequelize.models.credential.findAll({
    where: {
      username: creds.username
    }
  }).then(results => {
    if (results.length > 0) {
      const tableHash = results[0].dataValues.password;

      bcrypt.compare(creds.password, tableHash, (err, res) => {
        console.log('====', typeof creds.password)
        callback(res);
      });

    } else {
      callback(false);
    }
  })
}

exports.createCredentials = (credentials, callback) => {
  if (credentials.secret !== SECRET.newAccountCode) {
    callback('secret error');
    return;
  }

  //looks for username in login table
  sequelize.models.credential.findAll({
    where: {
      username: credentials.username
    }
  }).then(creds => {
    //could not find in logins table
    if (!creds || creds.length === 0) {

      bcrypt.genSalt(saltRounds, (err, salt) => {        
        bcrypt.hash(credentials.password, salt, (err, hash) => {
          sequelize.models.credential.create({
            username: credentials.username,
            password: hash
          }).then(() => {
            callback('success');
          });
        });
      });

    } else {
      callback('username error');
    }
  })
}