const patient = require('./patient.js');
const order = require('./medication-order.js');

exports.getAllPatients = patient.getAllPatients; 
exports.getPatientById = patient.getPatientById; 
exports.queryPatients = patient.queryPatients; 

// module.exports = patient;
// const { getAllPatients } = require('../././')
exports.getAllMedicationOrders = order.getAllMedicationOrders;
exports.getMedicationOrderById = order.getMedicationOrderById;
exports.getMedicationOrdersByPatientId = order.getMedicationOrdersByPatientId;
exports.queryMedicationOrders = order.queryMedicationOrders;
