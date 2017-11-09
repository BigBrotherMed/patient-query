const parser = require('body-parser');
const request = require('request');
const baseUrl = 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open/Patient';

exports.getAllPatients = (callback) => {
	request(baseUrl, (err, res, body) => {
		callback(err, JSON.parse(body).entry.map(patient => 
			_setPatient(patient.resource)));
	});
};

exports.getPatientById = (patientId , callback) => {
	request(baseUrl + '/' + patientId, (err, res, body) => {
		callback(err, _setPatient(JSON.parse(body)));
	});
};

exports.queryPatients = (queryString, callback) => {
	exports.getAllPatients((err, patients) => {
		Object.keys(queryString).forEach(key => {
			patients = patients.filter(patient => patient[key] === queryString[key])
		});
		callback(err, patients);
	});
}; 

const _setPatient = (data) => {
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

