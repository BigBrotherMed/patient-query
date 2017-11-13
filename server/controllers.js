const request = require('request');
const fhir = require('../api-data/index.js');
const sequelize = require('../db/controller.js');
const express = require('express');
let app = express();

module.exports = {

  patients: { 
    get: function(req, res, next) {
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
  
      };
    }
  },

  medication: {
    get: (req, res, next) => {
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
    get: (req, res, next) => {
      sequelize.getNotes(req.query.id, (allNotes) => {
        res.json(allNotes);
      })
    },

    post: (req, res, next) => {
      sequelize.addNote(req.body.patientId, req.body.note, allNotes => {
        res.json(allNotes);
      })
    }
  },

  credentials: {
    get: (req, res, next) => {

    },

    post: (req, res, next) => {
      console.log('@@@server side createcredentials', req.body.credentials);
      sequelize.createCredentials(req.body.credentials, result => {
        if (result === 'success') {
          res.json('created');
        }
        
        if (result === 'username error') {
          res.status(422).json('username already exists');
        }

        if (result === 'secret error') {
          res.status(412).json('secret word incorrect');
        }
      });
    }
  }

}