const Sequelize = require('sequelize');

const sequelize = new Sequelize('patientData', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
.authenticate()
.then(() => {
  console.log('Sequelize authentication ok');
})
.catch(error => {
  console.error('Error during authentication', error);
});

const Note = sequelize.define('note', {
  patientId: Sequelize.STRING,
  note: Sequelize.STRING(500)
})

sequelize.sync();

module.exports = sequelize;