const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

Router.post('/task',TaskController.create);

module.exports = router;