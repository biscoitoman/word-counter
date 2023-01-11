const express = require('express');

const {counterRouter} = require('../routes/v1/counter');

const v1Routes = express.Router();

v1Routes.use('/counter', counterRouter);

module.exports = {v1Routes};