var controller = require('./controllers.js');
var router = require('express').Router();

router.get('/patients', controller.patients.get);

router.get('/medication_orders', controller.medication.get);

router.get('/notes', controller.notes.get);

router.post('/notes', controller.notes.post);

router.get('/credentials', controller.credentials.get);

router.post('/credentials', controller.credentials.post);


module.exports = router;