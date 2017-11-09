const patient = require('./patient.js');

exports.getAllPatients = patient.getAllPatients; 
exports.getPatientById = patient.getPatientById; 
exports.queryPatients = patient.queryPatients; 

<<<<<<< HEAD
exports.getAllMedicationOrders = order.getAllMedicationOrders;
exports.getMedicationOrderById = order.getMedicationOrderById;
exports.getMedicationOrdersByPatientId = order.getMedicationOrdersByPatientId;
exports.queryMedicationOrders = order.queryMedicationOrders;
=======

patient.getAllPatients((err, data) => console.log('Number of Patients:', data.length));

var filter = (patient => patient.gender ==='female');
patient.queryPatients(filter, (err, data) => console.log('Female Patients:', data.length));
>>>>>>> Created basic patientDetails components
