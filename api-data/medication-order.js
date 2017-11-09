const parser = require('body-parser');
const request = require('request');
const baseUrl = 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open';

exports.getAllMedicationOrders = (callback) => {
	request(baseUrl + '/MedicationOrder', (err, res, body) => {
		callback(err, JSON.parse(body).entry.map(order => 
			_setOrder(order.resource)));
	});
};

exports.getMedicationOrderByOrdertId = (orderId , callback) => {
	request(baseUrl + '/MedicationOrder/' + orderId, (err, res, body) => {
		callback(err, _setOrder(JSON.parse(body)));
	});
};

exports.getMedicationOrdersByPatientId = (patientId , callback) => {
	exports.getAllMedicationOrders((err, orders) => {
		callback(err, orders.filter(order=> order.patient.reference === 'Patient/' + patientId));
	});
};

exports.queryMedicationOrders = (query, callback) => {
	exports.getAllMedicationOrders((err, orders) => {
		callback(err, orders.filter(order => query(order)));
	});
}; 

const _setOrder = (data) => {
	var dosage = data.dosageInstruction[0].timing.repeat;
	const order = {
		id: data.id,
		idPatient: data.patient.reference,
		lastUpdated: data.meta.lastUpdated,
		idMedication: data.medicationCodeableConcept.coding[0].code,
		medicationText: data.medicationCodeableConcept.coding[0].display,
		dosageInstruction: data.dosageInstruction[0].text,
		dosageFrequency: dosage.frequency + 'x every ' + dosage.period + ' ' + dosage.periodUnits,
		refills: data.dispenseRequest.numberOfRepeatsAllowed
	};
	return order;
}

