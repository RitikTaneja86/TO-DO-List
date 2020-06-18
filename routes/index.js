//require express
const express = require('express');

//using router of express
const router = express.Router();

//accessing controller
const todoHomeController = require('../controller/TODO_home');


// console.log("router loaded");


//accessing controller function
router.get('/',todoHomeController.todo);

//exporting router
module.exports = router;

