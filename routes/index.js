const express = require('express');

const router = express.Router();

//accessing controller
const todoHomeController = require('../controller/TODO_home');


// console.log("router loaded");


//accessing controller function
router.get('/',todoHomeController.todo);

module.exports = router;

