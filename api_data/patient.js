const request = require('request');
const baseUrl = 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open';

exports.filterPatients = (test, callback) => {
	exports.getPatients((err, patients) => {
		callback(err, patients.filter(patient=> test(patient)));
	});
}; 

exports.getPatients = (callback) => {
	request(baseUrl + '/Patient', (err, res, body) => {
		callback(err, JSON.parse(body).entry.map(patient => 
			setPatient(patient.resource)));
	});
};

exports.getPatient = (id , callback) => {
	request(baseUrl + '/Patient/' + id, (err, res, body) => {
		callback(err, setPatient(JSON.parse(body)));
	});
};

const setPatient = (data) => {
	const patient = {
		id: data.id,
		lastUpdated: data.meta.lastUpdated,
		active: data.active,
		lastName: data.name[0].family[0],
		firstName: data.name[0].given[0],
		gender: data.gender,
		birthdate: data.birthDate,
		address: data.address[0].line[0],
		city: data.address[0].city,
		zip: data.address[0].postalCode
	};

	data.telecom.forEach(contact => {
		if (contact.system === 'phone') {
			patient.phone = contact.value;
		} else if (contact.system === 'email') {
			patient.email = contact.value;
		}
	});
	return patient;
}

// exports.getPatients((err, data) => console.log(data.length));
// var test = (patient => patient.gender ==='female');
// exports.filterPatients(test, (err, data) => console.log('FILTERED', data.length));
