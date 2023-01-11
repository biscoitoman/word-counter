const express = require('express');

const {counterRoutes} = require('../routes/v1/counter');

const v1Routes = express.Router();

v1Routes.use('/counter', counterRoutes);