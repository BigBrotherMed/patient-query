const Sequelize = require('sequelize');

	let database = process.env.DATABASE_URL || 'patientdata'
	let sequelize = ""

	if (process.env.DATABASE_URL) {
	    sequelize = new Sequelize(database)
	}
	else {
		sequelize = new Sequelize(database, 'root', '', {
		  host: 'localhost',
		  dialect: 'mysql'
		});
	}

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
});

// const Login = sequelize.define('login', {
// 	username: Sequelize.STRING
// });

const Credential = sequelize.define('credential', {
	username: Sequelize.STRING(500),
	password: Sequelize.STRING(500)
});

sequelize.sync();

module.exports = sequelize;

 

