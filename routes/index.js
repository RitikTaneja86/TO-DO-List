const express = require('express');

const router = express.Router();
const todoHomeController = require('../controller/TODO_home');


// console.log("router loaded");

router.get('/',todoHomeController.todo);

module.exports = router;

