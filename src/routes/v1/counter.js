const express = require('express');
const CounterController = require('../../modules/counter/counterController');
const counterRouter = express.Router();

const counterController = new CounterController();


counterRouter.post('/word',counterController.word);