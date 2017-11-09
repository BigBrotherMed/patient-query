const db = require('../db/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const fhir = require('../api-data/index.js');

const app = express();
const PORT = 5000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(PORT, function(err) {
  if(err) { throw err }
  console.log('listening on port ', PORT);
});

app.get('/patients', (req, res) => {
  fhir.getAllPatients((err, patients) => {
  	res.status(200).send(JSON.stringify({patients: patients}));
  });
});

app.get('/patient', (req, res) => {
	if (Object.keys(req.query).length === 0) {
		res.status(404).send();
	} else if (req.query.id && Object.keys(req.query).length === 1) {
	  fhir.getPatientById(req.query.id,(err, patient) => {
	  	res.status(200).send(JSON.stringify({patient: patient}));
	  });
  } else {
  	fhir.queryPatients(req.query, (err, patients) => {
	  	res.status(200).send(JSON.stringify({patients: patients}));  		
  	});
  }
});

app.get('/medication-orders', (req, res) => {
  fhir.getAllMedicationOrders((err, orders) => {
  	res.status(200).send(JSON.stringify({orders: orders}));
  });
});

