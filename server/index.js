const db = require('../db/index.js');
const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));


app.listen(PORT, function(err) {
  if(err) { throw err }
})