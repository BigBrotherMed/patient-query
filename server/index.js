const db = require('../db/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const fhir = require('../api-data/index.js');
const sequelize = require('../db/controller.js');

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
	if (Object.keys(req.query).length === 0) {
	  fhir.getAllPatients((err, patients) => {
	  	res.status(200).send(JSON.stringify({patients: patients}));
	  });
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

app.get('/medication_orders', (req, res) => {
	if (Object.keys(req.query).length === 0) {
	  fhir.getAllMedicationOrders((err, orders) => {
	  	res.status(200).send(JSON.stringify({orders: orders}));
	  });
	} else if (req.query.id) {
	  fhir.getMedicationOrderById(req.query.id,(err, order) => {
	  	res.status(200).send(JSON.stringify({order: order}));
	  });
	} else if (req.query.patientId) {
	  fhir.getMedicationOrdersByPatientId(req.query.patientId,(err, orders) => {
	  	res.status(200).send(JSON.stringify({orders: orders}));
	  });
  }
});

app.get('/notes', (req, res) => {
	//TODO: link up so you can specify patientId
	sequelize.getNotes(req.body.patientId, (allNotes) => {
		res.json(allNotes);
	})
});

app.post('/notes', (req, res) => {
	console.log(`*****patientId:${req.body.patientId} || note:${req.body.note}`)
	sequelize.addNote(req.body.patientId, req.body.note, allNotes => {
		res.json(allNotes);
	})
});