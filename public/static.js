'use strict'

const express = require('express');
const app = express;

app.get('/', (req, res, next) => {
  res.send()
})

app.use(express.static('public'));

app.listen(8080);
