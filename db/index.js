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

sequelize.sync().then(() => {
  let seedData = [
    {
      patientId: 1,
      note: "Patient ID 1's test note"
    },
    {
      patientId: 2,
      note: "Patient ID 2's test note"      
    },
    {
      patientId: 3,
      note: "Patient ID 3's test note"     
    },
    {
      patientId: 3,
      note: "Patient ID 3's second test note"                 
    }
  ]
  Note.destroy({where:{}}).done(() => {
    Note.bulkCreate(seedData);
  });
});

module.exports = sequelize;