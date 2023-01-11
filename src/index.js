const express = require('express');
const { v1Router } = require('./api/v1');


const app = express();

app.use('/v1/', v1Router);

module.exports = {app};