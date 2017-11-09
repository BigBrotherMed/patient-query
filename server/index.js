const db = require('../db/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const fhir = require('../api-data/index.js');

const app = express();
const PORT = 5000;
console.log('Listening on port ' + PORT);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));

// app.get('/patients', (req, res) => {
//   fhir.getAllPatients(err, patients) => {
//   	console.log('server GET/patients, records:', patients.length);
//   	res.status(200).send(JSON.stringify({patients: patients}))
//   }
// });

// app.get('/medication-orders', (req, res) => {
//   fhir.getAllMedicationOrders(err, orders) => {
//   	console.log('server GET/orders, records:', orders.length);
//   	res.status(200).send(JSON.stringify({orders: orders}))
//   }
// });