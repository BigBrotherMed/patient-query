
const patient = require('./patient.js');
const order = require('./medication-order.js');

exports.getAllPatients = patient.getAllPatients; 
exports.getPatientById = patient.getPatientById; 
exports.queryPatients = patient.queryPatients; 

exports.getAllMedicationOrders = order.getAllMedicationOrders;
exports.getMedicationOrderByOrdertId = order.getMedicationOrderByOrdertId;
exports.getMedicationOrdersByPatientId = order.getMedicationOrdersByPatientId;
exports.queryMedicationOrders = order.queryMedicationOrders;

patient.getAllPatients((err, data) => console.log('Number of Patients:', data.length));

var filter = (patient => patient.gender ==='female');
patient.queryPatients(filter, (err, data) => console.log('Female Patients:', data.length));

order.getAllMedicationOrders((err, data) => console.log('Number of Medication Orders:', data.length));