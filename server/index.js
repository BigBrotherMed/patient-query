const db = require('../db/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const fhir = require('../api-data/index.js');
const sequelize = require('../db/controller.js');
let router = require('./routes.js');

const app = express();
const PORT = 5151;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.set('port', (process.env.PORT || PORT));
	
app.use(router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

