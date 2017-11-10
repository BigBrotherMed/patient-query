const request = require('request');
const fhir = require('../api-data/index.js');
const sequelize = require('../db/controller.js');

module.exports = {

  patients: {
    get: (req, res) => {
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
    }
  },

  medication: {
    get: (req, res) => {
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
    }
  },

  notes: {
    get: (req, res) => {
      sequelize.getNotes(req.query.id, (allNotes) => {
        res.json(allNotes);
      })
    },

    post: (req, res) => {
      sequelize.addNote(req.body.patientId, req.body.note, allNotes => {
        res.json(allNotes);
      })
    }
  }

}