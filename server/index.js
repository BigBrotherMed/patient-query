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


app.listen(PORT, function(err) {
  if(err) { throw err }
  console.log('listening on port ', PORT);
});
